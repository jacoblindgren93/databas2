import {IngredientType} from "@/types/ingredient";
import {DeleteIcon} from "lucide-react";

export default function IngredientListItem({ name, quantity, unit }: IngredientType){

	return(
		<div className="flex">
			<div>
				{name}
			</div>
			<div>
				<p>{`${quantity} ${unit}`}</p>
			</div>
			<div>
				<DeleteIcon/>
			</div>
		</div>
	)
}