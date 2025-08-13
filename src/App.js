import './styles/App.css';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <header className="cv-header">
        <h1>CV Application</h1>
      </header>
      
      <div className="cv-content">
        <div className="section">
          <GeneralInfo />
        </div>
        
        <div className="section-grid">
          <div className="section">
            <Education />
          </div>
          
          <div className="section">
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;