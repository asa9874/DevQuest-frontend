import { useState } from "react";
import Button from "../base/Button";
import Card from "../base/Card";
import RoundImage from "../base/RoundImage";
import HeaderButton from "./HeaderButton";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";

function Header() {
  const [showProfile, setShowProfile] = useState(false);
  const { id, email, name, logout } = useAuthStore();
  const navigate = useNavigate();

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };
  const navigateToLogin = () => {
    navigate("/login");
  };
  return (
    <header className="p-4 text-3xl font-bold text-sky-400 flex justify-between items-center border-b-2 border-slate-600">
      DevQuest
      <div className="flex space-x-2">
        <HeaderButton label="퀘스트" url="/quest" />
        <HeaderButton label="길드" url="/guild" />
        <HeaderButton label="던전" url="/dungeon" />
        <HeaderButton label="스킬" url="/skill" />
        <HeaderButton label="내정보" url="/myinfo" />
      </div>
      <div className="flex justify-end">
        <RoundImage size={50} onClick={toggleProfile} />
      </div>
      {showProfile && id && (
        <Card className="absolute top-16 right-4 w-72 bg-slate-800 text-slate-200 p-6 rounded-2xl shadow-2xl flex flex-col items-center border border-slate-600">
          <RoundImage size={96} />

          <span className="mt-4 text-lg font-semibold">{name}</span>
          <span className="text-sm text-slate-400">{email}</span>

          <Button
            className="mt-6  py-2 rounded-lg text-slate-100 font-medium transition w-full "
            type="button"
            label="로그아웃"
            color="bg-slate-700 hover:bg-slate-600"
            onClick={logout}
          />
        </Card>
      )}
      {showProfile && !id && (
        <Card className="absolute top-16 right-4 w-72 bg-slate-800 text-slate-200 p-6 rounded-2xl shadow-2xl flex flex-col items-center border border-slate-600">
          <span className="text-lg font-semibold">로그인 해주세요</span>
          <Button
            className="mt-6 py-2 rounded-lg text-slate-100 font-medium transition w-full"
            type="button"
            label="로그인"
            color="bg-sky-500 hover:bg-sky-400"
            onClick={navigateToLogin}
          />
        </Card>
      )}
    </header>
  );
}

export default Header;
