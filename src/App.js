import './App.css'
import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'
import UslugiPage from './components/uslugiPage/UslugiPage'
import ComplexPage from './components/complexPage/ComplexPage'
import StepsPage from './components/stepsPage/StepsPage'
import MiniPage from './components/miniPage/MiniPage'

function App() {
	return (
		<div className='App'>
			<div className='Header'>
				<Header />
			</div>
			<div className='Main'>
				<MainPage />
				<UslugiPage />
				<ComplexPage />
				<StepsPage />
				<MiniPage />
			</div>
			<div className='Footer'></div>
		</div>
	)
}

export default App
