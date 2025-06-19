import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInfo } from "../apis/member";
import { useAuthStore } from "../store/useAuthStore";

function OAuth2Redirect() {
  const navigate = useNavigate();
  const { id,setMember } = useAuthStore();
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token");
    const setInfo = async () => {
      try {
        const userData = await getMyInfo();
        setMember({
          id: userData.id,
          email: userData.email,
          name: userData.name,
        });
        console.log("로그인 성공", userData);
      } catch (err: any) {}
    };
    if (token) {
      localStorage.setItem("token", token);
      setInfo();
    } else {
      alert("로그인에 실패했습니다.");
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    if (id) {
      navigate("/");
    }
  }, [id]);
  
  return <div>로그인 처리 중입니다...</div>;
}

export default OAuth2Redirect;
