import { MinusIcon, PlusIcon } from "lucide-react";
import { useState } from "react";
import QuantityBtn from "./quantityBtn";
import { MenuItemDisplay } from "@/types/menuItemDisplay";

interface CheckOutItemProps {
  item: MenuItemDisplay;
  incSum: (num: number) => void;
  decSum: (num: number) => void;
}

export default function CheckOutItem({ item, incSum, decSum}: CheckOutItemProps) {

  const [quantity, setQuantity] = useState(1)

  function decrementQuantity() {
    if (quantity == 0) {
      //remove item
      return;
    }
    setQuantity((prev) => prev - 1);;
	decSum(item.unitPrice)
  }

  function incrementQuantity(){
	setQuantity((prev) => prev + 1)
	incSum(item.unitPrice)
  }

  return (
    <div className="m-2 flex rounded-md text-center items-center border-2 w-[80%]">
      <div className="flex m-2 mr-4">
        <QuantityBtn icon={<MinusIcon />} onClick={decrementQuantity} />
        <div className="bg-white font-bold rounded-md w-[25px] ml-2 mr-2 select-none pointer-events-none">
          {quantity}
        </div>
        <QuantityBtn icon={<PlusIcon />} onClick={incrementQuantity}  />
      </div>
      <div className="font-medium text-[13px] bg-white p-2 rounded-md w-full select-none">
        {`$${item.unitPrice} ${item.name}`}
      </div>
    </div>
  )
}
