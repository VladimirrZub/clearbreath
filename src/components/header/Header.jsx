import React, { useState, useEffect } from 'react'
import s from './Header.module.css'
import { HashLink as Link } from 'react-router-hash-link'
import RegistrationModal from '../modals/reg/RegistrationModal'
import LoginModal from '../modals/login/LoginModal'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Header = () => {
	const navigate = useNavigate()
	const [isRegModalOpen, setIsRegModalOpen] = useState(false)
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
	const [user, setUser] = useState(null)

	// Отслеживаем состояние аутентификации
	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setUser(user)
		})
		return () => unsubscribe()
	}, [])

	const openRegModal = () => {
		setIsRegModalOpen(true)
		setIsLoginModalOpen(false)
	}

	const openLoginModal = () => {
		setIsLoginModalOpen(true)
		setIsRegModalOpen(false)
	}

	const closeModals = () => {
		setIsRegModalOpen(false)
		setIsLoginModalOpen(false)
	}

	const handleLogout = async () => {
		try {
			await auth.signOut()
		} catch (error) {
			console.error('Ошибка выхода:', error)
		}
	}

	const scrollWithOffset = el => {
		const yOffset = -115
		const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset
		window.scrollTo({ top: y, behavior: 'smooth' })
	}

	const handleProfileClick = () => {
		navigate('/profile')
	}

	return (
		<div className={s.headerContainer}>
			<div className={s.headerMainContainer}>
				<Link
					smooth
					scroll={scrollWithOffset}
					style={{ textDecoration: 'none' }}
					to='#main'
				>
					<div className={s.headerLogo}></div>
				</Link>

				<div className={s.headerInfo}>
					<Link smooth style={{ textDecoration: 'none' }} to='#uslugi'>
						<div className={s.infoText}>услуги</div>
					</Link>
					<Link
						smooth
						scroll={scrollWithOffset}
						style={{ textDecoration: 'none' }}
						to='#complex'
					>
						<div className={s.infoText}>цены</div>
					</Link>
					<Link to='#us'>
						<div className={s.infoText}>о нас</div>
					</Link>
					<Link
						smooth
						scroll={scrollWithOffset}
						style={{ textDecoration: 'none' }}
						to='#comfort'
					>
						<div className={s.infoText}>польза продукта</div>
					</Link>
					<Link to='#steps'>
						<div className={s.infoText}>этапы работы</div>
					</Link>
					<Link to='#footer'>
						<div className={s.infoText}>контакты</div>
					</Link>
				</div>

				{user ? (
					<button
						onClick={() => navigate('/ProfilePage')}
						className={`${s.headerButton} ${s.userButton}`}
					>
						<button className={s.buttonSecStyle}>
							{user.displayName || user.email.split('@')[0]}
						</button>
					</button>
				) : (
					<button onClick={openLoginModal} className={s.headerButton}>
						<button className={s.buttonSecStyle}>Личный Кабинет</button>
					</button>
				)}
			</div>

			<RegistrationModal
				isOpen={isRegModalOpen}
				onClose={closeModals}
				onSwitchToLogin={openLoginModal}
			/>

			<LoginModal
				isOpen={isLoginModalOpen}
				onClose={closeModals}
				onSwitchToRegister={openRegModal}
			/>
		</div>
	)
}

export default Header
