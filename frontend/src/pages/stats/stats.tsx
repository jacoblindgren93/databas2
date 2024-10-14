import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const salesData = {
	Smashburger: {
		latest7Days: [100, 150, 130, 140, 200, 170, 220],
		latestMonth: [300, 250, 400, 300, 450, 400, 500, 470, 480, 510, 600, 650],
		latestYear: [1200, 1400, 1300, 1350, 1500, 1700, 1900, 2200, 2400, 2600, 2800, 3000],
	},
	CocaCola: {
		latest7Days: [200, 250, 230, 240, 260, 290, 300],
		latestMonth: [450, 470, 490, 510, 530, 550, 580, 600, 620, 640, 660, 680],
		latestYear: [1000, 1200, 1300, 1400, 1600, 1800, 1900, 2100, 2300, 2400, 2600, 2800],
	},
	Pizza: {
		latest7Days: [300, 330, 320, 350, 370, 400, 430],
		latestMonth: [500, 550, 600, 620, 650, 670, 690, 710, 750, 780, 800, 850],
		latestYear: [1500, 1600, 1700, 1800, 1900, 2000, 2200, 2400, 2500, 2600, 2800, 3000],
	},
	MeatballPasta: {
		latest7Days: [100, 110, 120, 140, 130, 150, 170],
		latestMonth: [300, 310, 330, 350, 370, 390, 400, 420, 450, 480, 500, 520],
		latestYear: [1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300],
	},
};

const menuItems = [
	{ id: 0, name: "Smashburger" },
	{ id: 1, name: "CocaCola" },
	{ id: 2, name: "Pizza" },
	{ id: 3, name: "MeatballPasta" },
];

export default function Stats() {
	const [selectedItem, setSelectedItem] = useState("Smashburger");
	const [timeRange, setTimeRange] = useState("latest7Days");

	const data = {
		labels:
			timeRange === "latest7Days"
				? ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"]
				: timeRange === "latestMonth"
					? Array.from({ length: 12 }, (_, i) => `Day ${i + 1}`)
					: timeRange === "latestYear"
						? ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
						: [],
		datasets: [
			{
				label: `Sales for ${selectedItem}`,
				data: salesData[selectedItem][timeRange],
				borderColor: "rgb(75, 192, 192)",
				backgroundColor: "rgba(75, 192, 192, 0.2)",
				fill: true,
			},
		],
	};

	return (
		<div className="container mx-auto pt-4">
			<h1 className="text-2xl font-bold mb-4">Sales Stats</h1>

			<div className="mb-4">
				<label className="block text-lg font-medium mb-2">Select Menu Item:</label>
				<select
					value={selectedItem}
					onChange={(e) => setSelectedItem(e.target.value)}
					className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-500"
				>
					{menuItems.map((item) => (
						<option key={item.id} value={item.name}>
							{item.name}
						</option>
					))}
				</select>
			</div>


			<div className="mb-4 space-x-4">
				<button onClick={() => setTimeRange("latest7Days")} className="px-4 py-2 bg-blue-500 text-white rounded">
					Latest 7 Days
				</button>
				<button onClick={() => setTimeRange("latestMonth")} className="px-4 py-2 bg-blue-500 text-white rounded">
					Latest Month
				</button>
				<button onClick={() => setTimeRange("latestYear")} className="px-4 py-2 bg-blue-500 text-white rounded">
					Latest Year
				</button>
			</div>

			<div>
				<Line data={data} />
			</div>
		</div>
	);
}
