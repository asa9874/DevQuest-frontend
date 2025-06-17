import Button from "../components/Button";
import Card from "../components/Card";
import InputField from "../components/InputField";

function Login(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <Card className="w-full max-w-md">
        <h2 className="text-slate-100 text-2xl font-bold mb-6 text-center">로그인</h2>
        <form>
          <InputField id="email" label="이메일" type="email" placeholder="you@example.com" />
          <InputField id="password" label="비밀번호" type="password" placeholder="••••••••" />
          <Button type="submit" label="로그인" className="bg-sky-500" />
        </form>
        <div className="text-center mt-4">
          <a href="/register" className="text-sky-400 hover:text-sky-300">회원가입</a>
        </div>
      </Card>
    </div>
  );
};

export default Login;
