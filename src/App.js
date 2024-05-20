import './App.css';
import './styles/variables.css'
import {LargeTitle, Link} from './components/TextComponents';
import { SmallButton, TinyButton } from './components/Buttons';
import {BoardInfo} from './components/features/BoardInfo/BoardInfo';
import {Profile } from './components/features/Profile/Profile';
import {TextForm} from './components/features/TextForm/TextForm'

function App() {
  return (
    <div className="App">
      <LargeTitle text="안녕?"></LargeTitle>
      <Link text="카카오 드가자" link="https://www.kakaocorp.com/page/"></Link>
      <SmallButton text="확인" isPurple="true"></SmallButton>
      <TinyButton text="수정"></TinyButton>
      <BoardInfo text="조회수" num="123"></BoardInfo>
      <Profile name="이름" url="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg" />
      <TextForm text="이메일*" name="email" type="email" placeholder="이메일을 입력하세요" helpText="*이메일을 입력해주세요."></TextForm>
    </div>
  );
}

export default App;