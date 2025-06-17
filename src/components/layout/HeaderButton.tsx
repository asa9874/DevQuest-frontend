import { useNavigate } from "react-router-dom";
import Button from "../base/Button";

interface HeaderButtonProps {
    url?: string;
    label?: string;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({
    url = "/",
    label = "기본"
}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(url);
    };
    return (
        <Button
            type="button"
            label={label}
            color="bg-slate-700 hover:bg-slate-600 text-slate-100 transition rounded-lg font-medium py-2 px-4 shadow-md hover:shadow-lg active:shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-800"
            onClick={handleClick}
        />
    );
};

export default HeaderButton;
