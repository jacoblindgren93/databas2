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
			{ id: 3, type: "Dinner", name: "MeatballPasta", unitPrice: 15, imgUrl:"https://images.unsplash.com/photo-1515516969-d4008cc6241a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }]);

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
