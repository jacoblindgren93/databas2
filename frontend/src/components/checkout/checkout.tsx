import { MenuItemDisplay } from "@/types/menuItemDisplay"
import { Button } from "../ui/button"
import CheckOutItem from "./checkoutItem"

interface CheckOutProps {
  items: MenuItemDisplay[]
}
export default function CheckOut({ items }: CheckOutProps) {
  return (
    <div className="border-l-2 border-primary min-h-dvh flex flex-col items-center relative w-[400px]">
      {items.map((item, i) => {
        return <CheckOutItem key={i} item={item} />
      })}
      <Button className="absolute bottom-4 select-none">{`$ ${120} SEK Place order`}</Button>
    </div>
  )
}
