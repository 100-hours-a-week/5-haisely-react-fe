import './App.css';
import './styles/variables.css'
import {LargeTitle, Link} from './components/TextComponents';

function App() {
  return (
    <div className="App">
      <LargeTitle text="안녕?"></LargeTitle>
      <Link text="카카오 드가자" link="https://www.kakaocorp.com/page/"></Link>
    </div>
  );
}

export default App;