import {Apple, ChartNoAxesColumn, House, LogOut} from "lucide-react";
import MenuIcon from "./menuIcon";
import {useNavigate} from "react-router-dom";

export default function SideBar(){

	const navigate = useNavigate();

	return(
		<div className="h-dvh bg-primary w-[100px] text-white flex flex-col items-center justify-center">
			<MenuIcon icon={<House size={"30px"}/>} onClick={() => navigate("/home")} toolTip="home"/>
			<MenuIcon icon={<ChartNoAxesColumn size={"30px"}/>} onClick={() => navigate("stats")} toolTip="Statistics"/>
			<MenuIcon icon={<Apple size={"30px"}/>} onClick={() => navigate("recipes")} toolTip="Recipes"/>
			<MenuIcon icon={<LogOut size={"30px"}/>} onClick={() => navigate("/")} toolTip="Sign out"/>
		</div>
	)
}