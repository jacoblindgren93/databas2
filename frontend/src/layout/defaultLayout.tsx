import SideBar from "@/components/menu/sidebar";
import {Outlet} from "react-router-dom";

export default function DefaultLayout(){

	return(
		<>
			<SideBar/>
			<Outlet/>
		</>
	)
}