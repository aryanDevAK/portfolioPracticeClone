import './App.css';
import './componentCSS/navBar.css';
import './componentCSS/banner.css';
import './componentCSS/skills.css';
import './componentCSS/projects.css';
import './componentCSS/footer.css';
import { Banner } from './components/Banner';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
