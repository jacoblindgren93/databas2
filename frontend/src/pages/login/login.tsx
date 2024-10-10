import {Button} from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useState} from "react";
import {useNavigate} from "react-router-dom"

export default function Login(){
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	function onSignIn(){
		if(username == "" || password == ""){
			//Maybe show error if we want
			return;
		}
		//Call api, set token to localstorage
		navigate("/home")
	}

	return(
		<div className="flex justify-center items-center w-full bg-neutral-200">
			<div className="bg-white w-[500px] h-[360px] rounded-md p-16">
				<form onSubmit={onSignIn}>
					<div className="mt-4">
						<Label>Username</Label>
						<Input onChange={(e) => setUsername(e.target.value)}/>
					</div>

					<div className="mt-4">
						<Label htmlFor="email">Password</Label>
						<Input type="password" onChange={(e) => setPassword(e.target.value)}/>
					</div>
					<center className="mt-8">
						<Button type="submit">Sign in</Button>
					</center>
				</form>
			</div>
		</div>
	)
}