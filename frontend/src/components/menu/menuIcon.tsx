import React from "react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "../ui/tooltip";

interface MenuIconProps {
	icon: React.ReactNode;
	onClick: () => void;
	toolTip: string;
}
export default function MenuIcon({icon, onClick, toolTip}: MenuIconProps){

	return(
		<div className="cursor-pointer w-full mt-8 flex items-center justify-center hover:scale-105 transition" onClick={onClick}>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger>{icon}</TooltipTrigger>
					<TooltipContent>
					<p>{toolTip}</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}