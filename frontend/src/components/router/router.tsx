import DefaultLayout from "@/layout/defaultLayout";
import Homepage from "@/pages/homepage/homepage";
import Login from "@/pages/login/login";
import Recipes from "@/pages/recipes/recipes";
import Stats from "@/pages/stats/stats";
import {BrowserRouter,Routes, Route} from "react-router-dom";

export default function Router(){

	console.log("Heheh")

	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login/>} /> 
				<Route path="/home" element={<DefaultLayout/>}>
					<Route index element={<Homepage/>}/>
					<Route path="/home/stats" element={<Stats/>} /> 
					<Route path="/home/recipes" element={<Recipes/>} />
				</Route> 
			</Routes>
		</BrowserRouter>
	)
}