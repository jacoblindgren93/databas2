import { MenuItemDisplay } from "@/types/menuItemDisplay"
import {Label} from "../ui/label";


interface ItemCardProps {
	menuItem: MenuItemDisplay;
}

export default function ItemCard({ menuItem}: ItemCardProps) {

return (
		<>
			<div className="rounded-sm cursor-pointer bg-white shadow-sm p-4 hover:shadow-lg transition-all">
			<div className="w-[250px] h-[250px] overflow-hidden">
				<img
				className="w-full h-full object-cover"
				src={menuItem.imgUrl ? menuItem.imgUrl : "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
				alt={"No image"}
				/>
			</div>
			<div className="w-full h-[2px] bg-neutral-200 mt-3 mb-1"></div>
			<Label>{`$${menuItem.unitPrice} ${menuItem.name}`}</Label>
			</div>
		</>

	)
}
