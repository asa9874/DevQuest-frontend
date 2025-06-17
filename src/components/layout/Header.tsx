import { useState } from "react";
import Button from "../Button";
import Card from "../Card";
import RoundImage from "../RoundImage";

function Header() {
    const [showProfile, setShowProfile] = useState(false);
    const toggleProfile = () => {
        setShowProfile(!showProfile);
    };
    return (
        <header className="p-4 text-3xl font-bold text-sky-400 flex justify-between items-center border-b-2 border-slate-600">
            DevQuest
            <div className="flex justify-end">
                <RoundImage
                    size={50}
                    onClick={toggleProfile}
                />
            </div>
            {showProfile && (
                <Card className="absolute top-16 right-4 w-72 bg-slate-800 text-slate-200 p-6 rounded-2xl shadow-2xl flex flex-col items-center border border-slate-600">
                    <RoundImage size={96} />

                    <span className="mt-4 text-lg font-semibold">닉네임</span>
                    <span className="text-sm text-slate-400">이메일</span>

                    <Button
                        className="mt-6  py-2 rounded-lg text-slate-100 font-medium transition"
                        type="button"
                        label="로그아웃"
                        color="bg-slate-700 hover:bg-slate-600"
                    />
                </Card>
            )}
        </header>
    )
}

export default Header;