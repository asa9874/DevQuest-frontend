import { useEffect, useState } from "react";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import InputField from "../components/base/InputField";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { loginMember } from "../apis/auth";
import ErrorMessage from "../components/ErrorMessage";

function Login(){
  const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { id ,setMember, logout } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError("");
      localStorage.removeItem("token");
      logout(); 
      const responseData = await loginMember(formData);
      localStorage.setItem("token", responseData.token);
      //const userData = await getMyInfo();
      const userData = { //임시
        id:12345,
        email:"a",
        name:"b",
      }
      setMember({
        id: userData.id,
        email: userData.email,
        name: userData.name,
      });
      navigate("/");
    } catch (err: any) {
      const serverMsg = err.response?.data.split(":").slice(-1).join(":").trim() || "오류";
      setError(serverMsg);
      console.error("로그인 실패:", err);
    }
  };
  
  function navigateToRegister() {
    navigate("/register");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <Card className="w-full max-w-md">
        <h2 className="text-slate-100 text-2xl font-bold mb-6 text-center">로그인</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          <InputField
            id="email" 
            label="이메일"
            type=""//TODO:이거 나중에 실제할때는 email로 할거임
            placeholder="test@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <InputField
            id="password"
            label="비밀번호"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <Button type="submit" label="로그인" className="w-full" />
        </form>
        <div className="text-center mt-4">
          <a onClick={navigateToRegister} className="text-sky-400 hover:text-sky-300">회원가입</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
