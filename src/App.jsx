import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Linkpost from "./pages/Linkpost";

//useNavigate 훅은 페이지를 실제로 이동시키는 네비게이트 함수를 반환
//버튼을 만들어서 거기에 onClick 이벤트를 넣어주고 네비게이트 값에 이동하려는 슬래시 작성
//useParams - 페이지에 명시한 url 파라미터의 값을 가져오는 기능을 한다

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/linkpost" element={<Linkpost />} />
      </Routes>
    </>
  );
}

export default App;
