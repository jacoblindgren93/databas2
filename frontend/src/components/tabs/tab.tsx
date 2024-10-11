import {Label} from "../ui/label";

interface TabProps {
	value: string;
	onClick?: () => void;
}

export default function Tab({value, onClick}: TabProps){

	let style = "ml-1 cursor-pointer w-[150px] mr-1 bg-white rounded-sm"

	if(value == "Main course"){
		style += " border-2 border-gray-400"
	}

	return(
		<div className={style}>
			 <Label>{value}</Label>
		</div>
	)
}