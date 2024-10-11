interface QuantityBtnProps {
	icon: React.ReactNode;
	onClick: () => void;
}
export default function QuantityBtn({icon, onClick}: QuantityBtnProps){

	return(
		<div onClick={onClick} className="cursor-pointer border-2 flex items-centerflex justify-center items-center bg-white  text-sm border-neutral-700 rounded-md">
			{icon}	
		</div>
	)
}