import {Button} from "@/components/ui/button"
import {MenuItemDisplayContext, MenuItemDisplayProvider} from "@/providers/dishes"
import {MenuItemDisplay} from "@/types/menuItemDisplay"
import {useContext} from "react"
import AddItemForm from "./addItemForm"
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table"
import {table} from "console"
import {Edit, TrashIcon} from "lucide-react"

export default function Recipes(){
	const {items, addItem, removeItem} = useContext(MenuItemDisplayContext)
	console.log(items)
	const headers = ["Name", "Price", "Category"];
	return(
		<div className="container mx-auto pt-4">
			<div className="flex items-start mt-16">
				<div className="grow-0 w-[50%]">
					<h1 className="font-bold">Add new dish</h1>
					<AddItemForm/>
				</div>
				<div className="flex ml-4 flex-col grow rounded-md border rounded-sm flex justify-center">
					<div className="mb-4">
						<h1 className="font-bold">My dishes</h1>
					</div>
					<Table className="bg-white">
						<TableHeader>
							<TableRow>
							{headers.map((headerGroup, i) => (
								<TableHead>
										{headerGroup}
									</TableHead>
							))}
							</TableRow>
						</TableHeader>
						<TableBody>
							{items.map((item) => {
								return <TableRow>
									<TableCell>{item.name}</TableCell>
									<TableCell>{item.unitPrice}</TableCell>
									<TableCell>{item.type}</TableCell>
									<TableCell>
										<Edit/>
									</TableCell>
									<TableCell>
										<TrashIcon/>
									</TableCell>
								</TableRow>
							})}
						</TableBody>
					</Table>
				</div>
			</div>
		</div>
	)
}