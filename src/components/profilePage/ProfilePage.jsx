import React, { useState, useEffect } from 'react'
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth'
import { doc, setDoc, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db } from '../firebase'
import { useNavigate } from 'react-router-dom'
import './ProfilePage.css'

const ProfilePage = () => {
	const [user] = useAuthState(auth)
	const [signOut] = useSignOut(auth)
	const [isEditing, setIsEditing] = useState(false)
	const [profile, setProfile] = useState({
		firstName: '',
		lastName: '',
		phone: '',
	})
	const [loading, setLoading] = useState(true)
	const navigate = useNavigate()

	// Загрузка данных профиля
	useEffect(() => {
		const fetchProfile = async () => {
			if (user) {
				setLoading(true)
				try {
					const profileRef = doc(db, 'users', user.uid)
					const profileSnap = await getDoc(profileRef)

					if (profileSnap.exists()) {
						setProfile(profileSnap.data())
					} else {
						await setDoc(profileRef, {
							firstName: '',
							lastName: '',
							phone: '',
						})
					}
				} catch (error) {
					console.error('Error fetching profile: ', error)
				} finally {
					setLoading(false)
				}
			}
		}

		fetchProfile()
	}, [user])

	const handleInputChange = e => {
		const { name, value } = e.target
		setProfile(prev => ({
			...prev,
			[name]: value,
		}))
	}

	const handleSave = async () => {
		if (user) {
			try {
				const profileRef = doc(db, 'users', user.uid)
				await updateDoc(profileRef, profile)
				setIsEditing(false)
			} catch (error) {
				console.error('Error saving profile: ', error)
			}
		}
	}

	const handleLogout = async () => {
		try {
			await signOut()
			navigate(-1) // Перенаправление на страницу входа после выхода
		} catch (error) {
			console.error('Error signing out: ', error)
		}
	}

	if (loading) {
		return <div className='loading'>Загрузка...</div>
	}

	return (
		<div className='profile-container'>
			<div className='profile-header'>
				<button onClick={() => navigate(-1)} className='back-btn'>
					← Назад
				</button>
				<h1>Профиль пользователя</h1>
				<button onClick={handleLogout} className='logout-btn'>
					Выйти
				</button>
			</div>

			{user ? (
				<div className='profile-content'>
					{isEditing ? (
						<div className='edit-form'>
							<div className='form-group'>
								<label>Имя:</label>
								<input
									type='text'
									name='firstName'
									value={profile.firstName}
									onChange={handleInputChange}
									placeholder='Введите имя'
								/>
							</div>

							<div className='form-group'>
								<label>Фамилия:</label>
								<input
									type='text'
									name='lastName'
									value={profile.lastName}
									onChange={handleInputChange}
									placeholder='Введите фамилию'
								/>
							</div>

							<div className='form-group'>
								<label>Телефон:</label>
								<input
									type='tel'
									name='phone'
									value={profile.phone}
									onChange={handleInputChange}
									placeholder='Введите телефон'
								/>
							</div>

							<div className='button-group'>
								<button onClick={handleSave} className='save-btn'>
									Сохранить
								</button>
								<button
									onClick={() => setIsEditing(false)}
									className='cancel-btn'
								>
									Отмена
								</button>
							</div>
						</div>
					) : (
						<div className='profile-info'>
							<p>
								<strong>Имя:</strong> {profile.firstName || 'Не указано'}
							</p>
							<p>
								<strong>Фамилия:</strong> {profile.lastName || 'Не указано'}
							</p>
							<p>
								<strong>Телефон:</strong> {profile.phone || 'Не указано'}
							</p>

							<button onClick={() => setIsEditing(true)} className='edit-btn'>
								Редактировать
							</button>
						</div>
					)}
				</div>
			) : (
				<p>Пожалуйста, войдите в систему для просмотра профиля</p>
			)}
		</div>
	)
}

export default ProfilePage
