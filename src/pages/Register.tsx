import Button from "../components/Button";
import Card from "../components/Card";
import InputField from "../components/InputField";

function Register() {
    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <Card className="w-full max-w-md">
        <h2 className="text-slate-100 text-2xl font-bold mb-6 text-center">회원가입</h2>
        <form>
          <InputField id="email" label="이메일" type="email" placeholder="you@example.com" />
          <InputField id="nickname" label="닉네임" type="text" placeholder="개발자 홍길동" />
          <InputField id="password" label="비밀번호" type="password" placeholder="••••••••" />
          <Button type="submit" label="회원가입" className="bg-sky-500" />
        </form>
      </Card>
    </div>
  );
};

export default Register;
