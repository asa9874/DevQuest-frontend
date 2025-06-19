import { useState } from "react";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import InputField from "../components/base/InputField";
import ErrorMessage from "../components/ErrorMessage";
import { registerMember } from "../apis/auth";
import { useNavigate } from "react-router-dom";

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    try {
      localStorage.removeItem("token");
      await registerMember(formData);
      navigate("/login");
    } catch (err: any) {
      const serverMsg = err.response?.data?.split(":").slice(-1).join(":").trim() || "오류";
      setError(serverMsg);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <Card className="w-full max-w-md">
        <h2 className="text-slate-100 text-2xl font-bold mb-6 text-center">회원가입</h2>
        {error && <ErrorMessage message={error} />}
        <form onSubmit={handleSubmit}>
          <InputField
            id="email"
            label="이메일"
            type="" //TODO: 나중에 실제할때는 email로 할거임
            placeholder="you@example.com"
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
          />
          <InputField
            id="name"
            label="닉네임"
            type="text"
            placeholder="개발자 홍길동"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          <InputField
            id="password"
            label="비밀번호"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={e => setFormData({ ...formData, password: e.target.value })}
          />
          <Button type="submit" label="회원가입" className="w-full" />
        </form>
      </Card>
    </div>
  );
};

export default Register;
