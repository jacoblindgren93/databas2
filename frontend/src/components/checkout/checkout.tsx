import { MenuItemDisplay } from "@/types/menuItemDisplay"
import { Button } from "../ui/button"
import CheckOutItem from "./checkoutItem"
import {useEffect, useState} from "react";
import {ReloadIcon} from "@radix-ui/react-icons";

interface CheckOutProps {
  items: MenuItemDisplay[]
	reset: () => void;
}
export default function CheckOut({ items, reset }: CheckOutProps) {
	const [sum, setSum] = useState(0);
	const [isLoading, setIsLoading] = useState(false)
	useEffect(() => {
		let newSum = 0;
		items.forEach((order) => {
			newSum += order.unitPrice
		})
		setSum(newSum)
	}, [items])

	function incSum(amount: number){
		setSum((prev) => prev+amount)
	}

	function decSum(amount: number){
		setSum((prev) => prev-amount)
	}

	function removeItems(){
		setIsLoading(true)
		setTimeout(() => {
			reset();
			setIsLoading(false)
		},700)
	}
	return (
    <div className="border-l-2 border-primary min-h-dvh flex flex-col items-center relative w-[400px]">
		<p className="text-5xl mt-4 mb-8 font-bold">Order</p>
      {items.map((item, i) => {
        return <CheckOutItem incSum={incSum} decSum={decSum} key={i} item={item} />
      })}
      <Button onClick={removeItems} className="absolute bottom-4 select-none">
			{isLoading && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
			{`$ ${sum} SEK Place order`}
		</Button>
    </div>
  )
}
