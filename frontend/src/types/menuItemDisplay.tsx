
export type MenuType = "Dinner" | "Breakfast" | "Dessert"

export type MenuItemDisplay = {
  id: number,
  name: string,
  unitPrice: number;
  type: MenuType;
  imgUrl?: string;
}
