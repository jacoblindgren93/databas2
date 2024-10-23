import {MenuType} from "@/types/menuItemDisplay";
import {Label} from "../ui/label";
import {useEffect, useState} from "react";

interface TabProps {
	value: MenuType;
	updateItems: (selection: MenuType) => void;
	selected: MenuType;
}

export default function Tab({value, selected, updateItems}: TabProps){
	let temp = "ml-1 cursor-pointer w-[150px] mr-1 bg-white rounded-sm hover:bg-neutral-100"
	const[style, setStyle] = useState(temp)
	useEffect(() => {
		if(selected == value){
			setStyle(temp + " bg-green-200 border-2 border-black")
		}
		else{
			setStyle(temp)
		}
	}, [selected])
	return(
		<div className={style} onClick={() => updateItems(value)}>
			 <Label>{value}</Label>
		</div>
	)
}