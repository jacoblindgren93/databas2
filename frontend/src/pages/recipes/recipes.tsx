import {Button} from "@/components/ui/button"
import {MenuItemDisplayContext, MenuItemDisplayProvider} from "@/providers/dishes"
import {MenuItemDisplay} from "@/types/menuItemDisplay"
import {useContext} from "react"
import AddItemForm from "./addItemForm"

export default function Recipes(){
	const {items, addItem, removeItem} = useContext(MenuItemDisplayContext)
	console.log(items)
	return(
		<div className="container mx-auto pt-4">
			<h1>Dishes</h1>
			<AddItemForm/>
			{items.map((item, id) => <p>{item.name}</p>)}
		</div>
	)
}