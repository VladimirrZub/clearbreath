import './App.css'
import Header from './components/header/Header'
import MainPage from './components/mainPage/MainPage'
import UslugiPage from './components/uslugiPage/UslugiPage'
import ComplexPage from './components/complexPage/ComplexPage'
import StepsPage from './components/stepsPage/StepsPage'
import MiniPage from './components/miniPage/MiniPage'
import AboutUsPage from './components/aboutusPage/AboutUsPage'
import ComfortPage from './components/comfortPage/ComfortPage'
import RaketkaPage from './components/raketkaPage/RaketkaPage'
import Footer from './components/footer/Footer'

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
				<AboutUsPage />
				<ComfortPage />
				<RaketkaPage />
				<Footer />
			</div>
		</div>
	)
}

export default App
