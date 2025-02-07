import './App.css'
import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'

function App() {
	return (
		<div className='App'>
			<div className='Header'>
				<Header />
			</div>
			<div className='Main'>
				<MainPage />
			</div>
			<div className='Footer'></div>
		</div>
	)
}

export default App
