import React, { useState, useEffect } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebase'
import './RegistrationModal.css'

const RegistrationModal = ({ isOpen, onClose, onSwitchToLogin }) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
	})
	const [error, setError] = useState(null)
	const [isLoading, setIsLoading] = useState(false)
	const [registrationSuccess, setRegistrationSuccess] = useState(false)

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

	useEffect(() => {
		if (registrationSuccess) {
			// После успешной регистрации сразу переключаем на вход
			const timer = setTimeout(() => {
				onClose()
				onSwitchToLogin(formData.email) // Передаем email для автозаполнения
				setRegistrationSuccess(false)
			}, 1500) // Небольшая задержка для UX

			return () => clearTimeout(timer)
		}
	}, [registrationSuccess])

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
		setError(null)
	}

	const handleSubmit = async e => {
		e.preventDefault()

		// Валидация
		if (formData.password !== formData.confirmPassword) {
			setError('Пароли не совпадают')
			return
		}

		if (formData.password.length < 6) {
			setError('Пароль должен содержать минимум 6 символов')
			return
		}

		if (!formData.username.trim()) {
			setError('Введите имя пользователя')
			return
		}

		setIsLoading(true)
		setError(null)

		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				formData.email,
				formData.password
			)

			await updateProfile(userCredential.user, {
				displayName: formData.username,
			})

			// Устанавливаем флаг успешной регистрации
			setRegistrationSuccess(true)
		} catch (error) {
			console.error('Ошибка регистрации:', error)
			switch (error.code) {
				case 'auth/email-already-in-use':
					setError('Пользователь с таким email уже существует')
					break
				case 'auth/invalid-email':
					setError('Некорректный email')
					break
				case 'auth/weak-password':
					setError('Пароль слишком слабый')
					break
				default:
					setError('Произошла ошибка при регистрации')
			}
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
				<h2>Регистрация</h2>

				{registrationSuccess ? (
					<div className='success-message'>
						Регистрация прошла успешно! Перенаправляем на вход...
					</div>
				) : (
					<>
						{error && <div className='error-message'>{error}</div>}

						<form onSubmit={handleSubmit}>
							{/* Поля формы остаются без изменений */}
							<div className='form-group'>
								<label htmlFor='username'>Имя пользователя:</label>
								<input
									id='username'
									name='username'
									value={formData.username}
									onChange={handleChange}
									required
									minLength='2'
									maxLength='30'
								/>
							</div>

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
									minLength='6'
								/>
							</div>

							<div className='form-group'>
								<label htmlFor='confirmPassword'>Подтвердите пароль:</label>
								<input
									type='password'
									id='confirmPassword'
									name='confirmPassword'
									value={formData.confirmPassword}
									onChange={handleChange}
									required
									minLength='6'
								/>
							</div>

							<button
								type='submit'
								className='submit-button'
								disabled={isLoading}
							>
								{isLoading ? 'Регистрация...' : 'Зарегистрироваться'}
							</button>
						</form>

						<div className='switch-auth'>
							<span>Уже зарегистрированы?</span>
							<button
								className='switch-button'
								onClick={() => onSwitchToLogin()}
							>
								Войти
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	)
}

export default RegistrationModal
