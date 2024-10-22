import CheckOut from "@/components/checkout/checkout"
import ItemCard from "@/components/itemCard/itemCard"
import { MenuItemDisplay } from "@/types/menuItemDisplay"
import Tab from "@/components/tabs/tab"
import Tabs from "@/components/tabs/Tabs"
import React from "react"
export default function Homepage() {
  let items: MenuItemDisplay[] = [
    { id: 0, name: "Smashburger", unitPrice: 90, imgUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 1, name: "Coca cola", unitPrice: 15, imgUrl: "https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Pizza", unitPrice: 110, imgUrl:"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Meatball pasta", unitPrice: 125, imgUrl:"https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },

  ]

  return (
    <div className="w-full flex justify-between">
      <div className="flex h-dvh flex-col w-full overflow-y-auto ">
        <div className="h-[100px]">
          <div className="m-4">
			<div>
				<Tabs>
					<Tab value="Starters" />
					<Tab value="Main course" />
					<Tab value="Dessert" />
					<Tab value="Drinks" />
				</Tabs>
			</div>
          </div>
        </div>
        <div className="w-full p-16 grid grid-cols-4 gap-16 d">
			{items.map((item) => 
				<ItemCard key={item.id} menuItem={item} onClick={() => console.log("CLick")} />
			)}
        </div>
      </div>
      <div>
        <CheckOut items={items} />
      </div>
    </div>
  )
}
