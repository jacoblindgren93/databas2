import Homepage from "@/pages/homepage/homepage";
import Login from "@/pages/login/login";
import Stats from "@/pages/stats/stats";
import {BrowserRouter,Routes, Route} from "react-router-dom";

export default function Router(){

	console.log("Heheh")

	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>} /> 
				<Route path="/home" element={<Homepage/>} /> 
				<Route path="/stats" element={<Stats/>} /> 
			</Routes>
		</BrowserRouter>
	)
}