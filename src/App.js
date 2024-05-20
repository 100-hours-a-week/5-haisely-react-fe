import './App.css';
import './styles/variables.css'
import {LargeTitle, Link} from './components/TextComponents';
import { SmallButton, TinyButton } from './components/Buttons';
import {BoardInfo} from './components/features/BoardInfo/BoardInfo';
import {Profile } from './components/features/Profile/Profile';
import {TextForm} from './components/features/TextForm/TextForm';
import {Dropdown} from './components/features/Dropdown/Dropdown';
import {Comment} from './components/features/Comment/Comment';

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
      <Dropdown profileUrl="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg"></Dropdown>
      <Comment name="이름" content="이이이이ㅣ이이이이이이이내용ㅇ엉ㅇ" date="2021-01-01 00:00:00" profileUrl="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg"></Comment>
    </div>
  );
}

export default App;