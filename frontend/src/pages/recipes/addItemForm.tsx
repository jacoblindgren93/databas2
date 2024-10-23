import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {MenuItemDisplayContext} from "@/providers/dishes";
import {MenuItemDisplay, MenuType} from "@/types/menuItemDisplay";
import {ReloadIcon} from "@radix-ui/react-icons";
import {Label} from "@radix-ui/react-label";
import {useContext, useState} from "react";
import {Ingredient} from "./ingredient";
import {IngredientType} from "@/types/ingredient";
import IngredientListItem from "./ingredientListItem";
import { Toaster } from "@/components/ui/toaster"
import {useToast} from "@/hooks/use-toast";

export default function addItemForm() {
	const { toast } = useToast()

	const { addItem } = useContext(MenuItemDisplayContext);
	const [name, setName] = useState("");
	const [price, setPrice] = useState(0);
	const [img, setImg] = useState("");
	const [type, setType] = useState<MenuType>("Breakfast");
	const [loading, setLoading] = useState(false);
	const [ingredients, setIngredients] = useState<IngredientType[]>([]);
	const [ingredientName, setIngredientName] = useState("");
	const [ingredientQty, setIngredientQty] = useState<number>(0);
	const [unit, setUnit] = useState("");

	function onAddItem() {
		setLoading(true);
		setTimeout(() => {
			const item: MenuItemDisplay = { id: 0, name: name, unitPrice: price, type: type, imgUrl: img };
			addItem(item);
			setLoading(false);
			toast({
				title: "Menu item added",
				description: `${name} added to your menu`,
			})
		}, 500);
	}

	function addIngredient() {
		if (ingredientName && ingredientQty > 0 && unit) {
			setIngredients((prev) => [...prev, { name: ingredientName, quantity: ingredientQty, unit }]);

			// Reset the ingredient form
			setIngredientName("");
			setIngredientQty(0);
			setUnit("");
		}
	}

	return (
		<div className="mt-4 p-5 bg-white rounded-sm border-1">
			<h2 className="text-[25px]">Add new dish</h2>
			<div className="p-5">
				<Label>Name</Label>
				<Input onChange={(e) => setName(e.target.value)} type="text" />
			</div>

			<div className="p-5">
				<Label>Price</Label>
				<Input onChange={(e) => setPrice(parseInt(e.target.value))} type="number" />
			</div>
			<div className="p-5">
				<Label>Image url (Optional)</Label>
				<Input onChange={(e) => setImg(e.target.value)} type="text" />
			</div>
			<div className="p-5">
				<Select onValueChange={(e : MenuType) => setType(e)}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Category" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="All">All</SelectItem>
						<SelectItem value="Breakfast">Breakfast</SelectItem>
						<SelectItem value="Lunch">Lunch</SelectItem>
						<SelectItem value="Dinner">Dinner</SelectItem>
						<SelectItem value="Dessert">Dessert</SelectItem>
						<SelectItem value="Drink">Drink</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="flex flex-col items-center justify-center p-5 pl-52 pr-52 border-t-2 border-b-2">
				<div className="flex items-end justify-between">
					<div className="p-5">
						<Ingredient callback={setIngredientName} />
					</div>

					<div className="p-5">
						<Label>Quantity</Label>
						<Input
							value={ingredientQty || ""}
							onChange={(e) => setIngredientQty(parseInt(e.target.value))}
							type="number"
							/>
					</div>

					<div className="p-5">
						<Select value={unit} onValueChange={(val) => setUnit(val)}>
							<SelectTrigger className="w-[180px]">
								<SelectValue placeholder="Unit"/>
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="kg">kg</SelectItem>
								<SelectItem value="g">g</SelectItem>
								<SelectItem value="unit">units</SelectItem>
							</SelectContent>
						</Select>
					</div>

					<div className="p-5">
						<Button variant="outline" onClick={addIngredient}>
							Add ingredient
						</Button>
					</div>

				</div>
				{ingredients.map((ing, index) => (
					<IngredientListItem key={index} {...ing} />
				))}
			</div>

			<div className="p-5">
				<Button className="mt-4" onClick={onAddItem}>
					{loading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
					Add item
				</Button>
				<Toaster />
			</div>
		</div>
	);
}