import {IngredientType} from "@/types/ingredient";
import {DeleteIcon} from "lucide-react";

export default function IngredientListItem({ name, quantity, unit }: IngredientType){

	return(
		<div className="w-[50%] flex justify-between p-4 m-2 border-2 rounded-sm">
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