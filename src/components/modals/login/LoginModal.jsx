import React, { useState, useEffect } from 'react'
import {
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../../firebase'
import '../reg/RegistrationModal.css'

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})
	const [error, setError] = useState(null)
	const [success, setSuccess] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [showResetForm, setShowResetForm] = useState(false)
	const [resetEmail, setResetEmail] = useState('')

	useEffect(() => {
		if (isOpen) {
			const scrollY = window.scrollY
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.width = '100%'
		} else {
			const scrollY = document.body.style.top
			document.body.style.position = ''
			document.body.style.top = ''
			document.body.style.width = ''
			window.scrollTo(0, parseInt(scrollY || '0') * -1)
		}
	}, [isOpen])

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({
			...prev,
			[name]: value,
		}))
		setError(null)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		if (!formData.email || !formData.password) {
			setError('Заполните все поля')
			return
		}

		setIsLoading(true)
		setError(null)
		setSuccess(null)

		try {
			await signInWithEmailAndPassword(auth, formData.email, formData.password)
			onClose()
		} catch (error) {
			console.error('Ошибка входа:', error.code)

			if (error.code === 'auth/invalid-credential') {
				setError('Неверный пароль. Попробуйте снова')
			} else if (error.code === 'auth/user-not-found') {
				setError('Пользователь с таким email не найден')
			} else if (error.code === 'auth/too-many-requests') {
				setError('Слишком много попыток, попробуйте позже')
			} else {
				setError(`Ошибка входа: ${error.message}`)
			}
		} finally {
			setIsLoading(false)
		}
	}

	const handleResetPassword = async () => {
		if (!resetEmail) {
			setError('Введите email для восстановления')
			return
		}

		setIsLoading(true)
		setError(null)
		setSuccess(null)

		try {
			await sendPasswordResetEmail(auth, resetEmail)
			setSuccess(`Письмо для сброса пароля отправлено на ${resetEmail}`)
			setShowResetForm(false)
			setResetEmail('')
		} catch (error) {
			console.error('Ошибка сброса пароля:', error)
			setError(`Ошибка: ${error.message}`)
		} finally {
			setIsLoading(false)
		}
	}

	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
					×
				</button>

				{showResetForm ? (
					<>
						<h2>Восстановление пароля</h2>

						{error && <div className='error-message'>{error}</div>}
						{success && <div className='success-message'>{success}</div>}

						<div className='form-group'>
							<label htmlFor='reset-email'>Ваш Email:</label>
							<input
								type='email'
								id='reset-email'
								value={resetEmail}
								onChange={e => setResetEmail(e.target.value)}
								required
							/>
						</div>

						<div className='button-group'>
							<button
								type='button'
								className='submit-button'
								onClick={handleResetPassword}
								disabled={isLoading}
							>
								{isLoading ? 'Отправка...' : 'Отправить'}
							</button>

							<button
								type='button'
								className='switch-button'
								onClick={() => {
									setShowResetForm(false)
									setError(null)
								}}
							>
								Назад
							</button>
						</div>
					</>
				) : (
					<>
						<h2>Вход</h2>

						{error && <div className='error-message'>{error}</div>}
						{success && <div className='success-message'>{success}</div>}

						<form onSubmit={handleSubmit}>
							<div className='form-group'>
								<label htmlFor='email'>Email:</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									required
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='password'>Пароль:</label>
								<input
									type='password'
									id='password'
									name='password'
									value={formData.password}
									onChange={handleChange}
									required
								/>
							</div>

							<button
								type='submit'
								className='submit-button'
								disabled={isLoading}
							>
								{isLoading ? 'Вход...' : 'Войти'}
							</button>
						</form>

						<div className='auth-links'>
							<button
								className='forgot-password-button'
								onClick={() => setShowResetForm(true)}
							>
								Забыли пароль?
							</button>

							<div className='switch-auth'>
								<span>Ещё не зарегистрированы?</span>
								<button className='switch-button' onClick={onSwitchToRegister}>
									Регистрация
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default LoginModal
