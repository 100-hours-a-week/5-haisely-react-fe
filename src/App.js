import './App.css';
import './styles/variables.css'
import {LargeTitle, Link} from './components/TextComponents';
import { SmallButton, TinyButton } from './components/Buttons';
import {BoardInfo} from './components/features/BoardInfo/BoardInfo';

function App() {
  return (
    <div className="App">
      <LargeTitle text="안녕?"></LargeTitle>
      <Link text="카카오 드가자" link="https://www.kakaocorp.com/page/"></Link>
      <SmallButton text="확인" isPurple="true"></SmallButton>
      <TinyButton text="수정"></TinyButton>
      <BoardInfo text="조회수" num="123"></BoardInfo>
    </div>
  );
}

export default App;