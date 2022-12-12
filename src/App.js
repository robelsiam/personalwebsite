// Import Components
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Social from './components/Social';
import Footer from './components/Footer';
import Banner from './components/Banner';

function App() {
	return (
		<div className = "background">
			<div className = "App">
				<Banner />
				<Header />
				<Projects />
				<About />
				<Social />
				<Footer />
			</div>
		</div>
	);
}

export default App;
