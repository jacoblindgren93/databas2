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
	items: [],
	addItem: () => {},   // Provide empty functions as placeholders
	removeItem: () => {}
};

export const MenuItemDisplayContext = createContext<MenuItemDisplayProviderType>(initialState);

interface MenuItemDishProviderProps {
	children: React.ReactNode;
}

export function MenuItemDisplayProvider({ children }: MenuItemDishProviderProps) {
	const [items, setItems] = useState<MenuItemDisplay[]>([]);

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
