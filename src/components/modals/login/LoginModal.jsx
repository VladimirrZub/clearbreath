import React, { useState, useEffect } from 'react'
import '../reg/RegistrationModal' // Используем те же стили

const LoginModal = ({ isOpen, onClose, onSwitchToRegister }) => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

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
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('Форма входа отправлена:', formData)
		onClose()
	}

	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
					×
				</button>
				<h2>Вход</h2>
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

					<button type='submit' className='submit-button'>
						Войти
					</button>
				</form>

				<div className='switch-auth'>
					<span>Ещё не зарегистрированы?</span>
					<button className='switch-button' onClick={onSwitchToRegister}>
						Регистрация
					</button>
				</div>
			</div>
		</div>
	)
}

export default LoginModal
