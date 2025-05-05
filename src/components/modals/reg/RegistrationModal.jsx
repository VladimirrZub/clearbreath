import React, { useState, useEffect } from 'react'
import './RegistrationModal.css'

const RegistrationModal = ({ isOpen, onClose, onSwitchToLogin }) => {
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
		confirmPassword: '',
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
		console.log('Форма отправлена:', formData)
		onClose()
	}

	if (!isOpen) return null

	return (
		<div className='modal-overlay'>
			<div className='modal'>
				<button className='close-button' onClick={onClose}>
					×
				</button>
				<h2>Регистрация</h2>
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

					<div className='form-group'>
						<label htmlFor='confirmPassword'>Подтвердите пароль:</label>
						<input
							type='password'
							id='confirmPassword'
							name='confirmPassword'
							value={formData.confirmPassword}
							onChange={handleChange}
							required
						/>
					</div>

					<button type='submit' className='submit-button'>
						Зарегистрироваться
					</button>
				</form>

				<div className='switch-auth'>
					<span>Уже зарегистрированы?</span>
					<button className='switch-button' onClick={onSwitchToLogin}>
						Войти
					</button>
				</div>
			</div>
		</div>
	)
}

export default RegistrationModal
