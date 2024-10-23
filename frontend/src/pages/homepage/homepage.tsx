import CheckOut from "@/components/checkout/checkout"
import ItemCard from "@/components/itemCard/itemCard"
import { MenuItemDisplay, MenuType } from "@/types/menuItemDisplay"
import Tab from "@/components/tabs/tab"
import Tabs from "@/components/tabs/Tabs"
import React, {useContext, useEffect, useState} from "react"
import {MenuItemDisplayContext} from "@/providers/dishes"
import {Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"
import {ExclamationTriangleIcon} from "@radix-ui/react-icons"
export default function Homepage() {
	
	const [numOrders, setNumOrders] = useState(1);
	const [displayItems, setDisplayItems] = useState<MenuItemDisplay[]>([])
	const [checkOutItems, setCheckOutItems] = useState<MenuItemDisplay[]>([])
  	const {items} = useContext(MenuItemDisplayContext)
	const [showWarning, setShowWarning] = useState(false)
	const [selected, setSelected] = useState<MenuType>("All");

	useEffect(() => {
		setDisplayItems([...items])
	}, [])


	function orderPlaced(){
		setNumOrders((prev) => prev+1)
		setCheckOutItems([])
		if(numOrders > 1){
			setShowWarning(true)
		}
	}


	function filterItems(value: MenuType){
		setSelected(value)
		if(value == "All"){
			setDisplayItems([...items])
		}else{
			let newList = items.filter((item) => item.type == value)
			setDisplayItems(newList)
		}
	}
  return (
    <div className="w-full flex justify-between">
      <div className="flex h-dvh flex-col w-full overflow-y-auto ">
        <div className="h-[100px]">
          <div className="m-4">
			<div>
				<Tabs>
					<Tab value="All" updateItems={filterItems} selected={selected} />
					<Tab value="Breakfast" updateItems={filterItems}selected={selected} />
					<Tab value="Lunch" updateItems={filterItems}selected={selected} />
					<Tab value="Dinner" updateItems={filterItems}selected={selected} />
					<Tab value="Dessert" updateItems={filterItems}selected={selected} />
					<Tab value="Drink" updateItems={filterItems}selected={selected} />
				</Tabs>
			</div>
          </div>
		 <center >
			<div className="w-[50%] mt-4">
			{showWarning &&
				<Alert variant="destructive" className="bg-red-50">
					<ExclamationTriangleIcon className="h-4 w-4" />
					<AlertTitle>Warning</AlertTitle>
					<AlertDescription>
						Coca-Cola is low on stock
					</AlertDescription>
				</Alert>
			}
			</div>
		</center>
        </div>

        <div className="w-full p-16 grid grid-cols-4 gap-16 d">
			{displayItems.map((item) => { 
				return <div onClick={() => setCheckOutItems((prev) => [...prev, item])} >
					<ItemCard key={item.id} menuItem={item} />
				</div>
			}
			)}
        </div>
      </div>
      <div>
        <CheckOut items={checkOutItems} reset={() => orderPlaced()}/>
      </div>
    </div>
  )
}
