import { MenuItemDisplay } from "@/types/menuItemDisplay"
import {Label} from "../ui/label";


interface ItemCardProps {
	menuItem: MenuItemDisplay;
	onClick: () => void;
}

export default function ItemCard({ menuItem, onClick }: ItemCardProps) {

return (
		<>
			<div className="rounded-sm cursor-pointer bg-white shadow-sm p-4 hover:shadow-lg transition-all">
			<div className="w-[250px] h-[250px] overflow-hidden">
				<img
				className="w-full h-full object-cover"
				src={menuItem.imgUrl}
				alt={menuItem.name}
				/>
			</div>
			<div className="w-full h-[2px] bg-neutral-200 mt-3 mb-1"></div>
			<Label>{`$${menuItem.unitPrice} ${menuItem.name}`}</Label>
			</div>
		</>

	)
}
