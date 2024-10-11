interface TabsProps {
	children: React.ReactNode;
}

export default function Tabs({children}: TabsProps){
	return(
		<center>
			<div className="flex w-[50%] items-center justify-between">
				{children}
			</div>
		</center>
	)
}