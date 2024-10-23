import { MenuItemDisplay } from "@/types/menuItemDisplay";
import { createContext, useContext, useState } from "react";

// Define the provider type correctly
export type MenuItemDisplayProviderType = {
	items: MenuItemDisplay[];
	addItem: (item: MenuItemDisplay) => void;
	removeItem: (id: number) => void;
};

// Correct initial state for the provider
const initialState: MenuItemDisplayProviderType = {
	items: [
			
	
	],
	addItem: () => {},   // Provide empty functions as placeholders
	removeItem: () => {}
};

export const MenuItemDisplayContext = createContext<MenuItemDisplayProviderType>(initialState);

interface MenuItemDishProviderProps {
	children: React.ReactNode;
}

export function MenuItemDisplayProvider({ children }: MenuItemDishProviderProps) {
	const [items, setItems] = useState<MenuItemDisplay[]>([{ id: 0, type: "Dinner", name: "Smashburger", unitPrice: 9, imgUrl: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 1, type: "Drink", name: "CocaCola", unitPrice: 2, imgUrl: "https://images.unsplash.com/photo-1667204651371-5d4a65b8b5a9?q=80&w=2032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 2, type: "Dinner", name: "Pizza", unitPrice: 12, imgUrl:"https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 3, type: "Dinner", name: "MeatballPasta", unitPrice: 15, imgUrl:"https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 4, type: "Dinner", name: "Carbonara", unitPrice: 12, imgUrl:"https://images.unsplash.com/photo-1560434019-4558f9a9e2a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 5, type: "Dinner", name: "FishSoup", unitPrice: 14, imgUrl:"https://images.unsplash.com/photo-1609355108742-dcbc6c51a3a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 6, type: "Dinner", name: "Steak", unitPrice: 20, imgUrl:"https://images.unsplash.com/photo-1504973960431-1c467e159aa4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 7, type: "Breakfast", name: "Egg and bacon", unitPrice: 8, imgUrl:"https://plus.unsplash.com/premium_photo-1693086421131-c0cb5a3bada3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 8, type: "Drink", name: "Beer", unitPrice: 9, imgUrl:"https://images.unsplash.com/photo-1647206352320-a7964fa28428?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 9, type: "Drink", name: "Red wine", unitPrice: 9, imgUrl:"https://images.unsplash.com/photo-1641759756543-20168fcab299?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 10, type: "Lunch", name: "Pancakes", unitPrice: 7, imgUrl:"https://images.unsplash.com/photo-1586985288123-2495f577c250?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 11, type: "Drink", name: "Coffee", unitPrice: 3, imgUrl:"https://images.unsplash.com/photo-1489866492941-15d60bdaa7e0?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
			{ id: 12, type: "Dessert", name: "Apple pie", unitPrice: 5, imgUrl:"https://images.unsplash.com/photo-1601000938305-d0ebe1706d72?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
		]);

	// Add item function
	function addItem(item: MenuItemDisplay) {
		setItems((prev) => [...prev, item]);
	}

	// Remove item function
	function removeItem(id: number) {
		setItems((prev) => prev.filter((item) => item.id !== id));
	}

	const value = {
		items,
		addItem,
		removeItem
	};

	return (
		<MenuItemDisplayContext.Provider value={value}>
			{children}
		</MenuItemDisplayContext.Provider>
	);
}

// Custom hook to use the context
export const useMenuItems = () => {
	const context = useContext(MenuItemDisplayContext);

	if (context === undefined) {
		throw new Error("useMenuItems must be used within a MenuItemDisplayProvider");
	}

	return context;
};
