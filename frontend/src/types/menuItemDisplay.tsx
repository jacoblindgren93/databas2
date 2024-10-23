
export type MenuType = "Dinner" | "Breakfast" | "Lunch" | "Dessert" | "All" | "Drink"

export type MenuItemDisplay = {
  id: number,
  name: string,
  unitPrice: number;
  type: MenuType;
  imgUrl?: string;
}
