import { useContext, useEffect, useState } from "react";
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
import {MenuItemDisplayContext} from "@/providers/dishes";
import {Alert} from "@/components/ui/alert";

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

const analyticsData = {
	"gross-profit": [1200, 1400, 1500, 1300, 1700, 1800, 1900, 1600, 2000, 2200, 2400, 2500],
	expenses: [400, 300, 350, 380, 450, 420, 470, 460, 480, 500, 520, 540],
	"net-profit": [800, 1100, 1150, 920, 1250, 1380, 1430, 1140, 1520, 1700, 1880, 1960],
	"stock-minced-meat-august": 300,
	"most-popular-dish": "Pizza",
	"least-popular-dish": "Meatball Pasta",
};


export default function Stats() {

	const {items} = useContext(MenuItemDisplayContext)

	const menuItems = items
	const [selectedItem, setSelectedItem] = useState("Smashburger");
	const [timeRange, setTimeRange] = useState("latest7Days");
	const [selectedMetric, setSelectedMetric] = useState("gross-profit");
	const [error, setError] = useState(false)
	const metrics = ["gross-profit", "expenses", "net-profit"];
	
	const changeSelectedItem = (value: string) => {
		console.log("TRIGGER")
		setError(true)
		items.forEach((item) => {
			if(item.name == value){
				console.log
				setSelectedItem(value)
				setError(false)
			}
		})
	}
	console.log("error", error)
	const data = !error && {
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
	const handleMetricChange = (e) => {
		setSelectedMetric(e.target.value);
	};

	return (
		<div className="container mx-auto pt-4">
			<h1 className="text-2xl font-bold mb-4">Sales Stats and Analytics</h1>

			<div className="flex flex-col lg:flex-row lg:space-x-8">
				{/* Graph Section */}
				<div className="lg:w-1/2 mb-8 lg:mb-0">
					<h2 className="text-xl font-bold mb-4">Sales Graph</h2>

					<div className="mb-4">
						<label className="block text-lg font-medium mb-2">Select Menu Item:</label>
						<select
							value={selectedItem}
							onChange={(e) => changeSelectedItem(e.target.value)}
							className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-500"
						>
							{items.map((item) => (
								<option key={item.id} value={item.name}>
									{item.name}
								</option>
							))}
							<option>
								HejBaeriba
							</option>
						</select>
					</div>

					<div className="mb-4 space-x-4">
						<button
							onClick={() => setTimeRange("latest7Days")}
							className="px-4 py-2 bg-blue-500 text-white rounded"
						>
							Latest 7 Days
						</button>
						<button
							onClick={() => setTimeRange("latestMonth")}
							className="px-4 py-2 bg-blue-500 text-white rounded"
						>
							Latest Month
						</button>
						<button
							onClick={() => setTimeRange("latestYear")}
							className="px-4 py-2 bg-blue-500 text-white rounded"
						>
							Latest Year
						</button>
					</div>

					{/* Adjusted graph size */}
					<div className="w-full h-64">
						{!error ? <Line data={data}/> : <Alert variant="destructive">No data availible</Alert>}
					</div>
				</div>

				{/* Analytics Section */}
				<div className="lg:w-1/2">
					<h2 className="text-xl font-bold mb-4">Analytics</h2>
					<div className="mb-4">
						<label className="block text-lg font-medium mb-2">Select Metric:</label>
						<select
							value={selectedMetric}
							onChange={handleMetricChange}
							className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring focus:border-blue-500"
						>
							{metrics.map((metric, index) => (
								<option key={index} value={metric}>
									{metric.replace("-", " ").toUpperCase()}
								</option>
							))}
						</select>
					</div>

					{selectedMetric === "gross-profit" || selectedMetric === "expenses" || selectedMetric === "net-profit" ? (
						<table className="table-auto border-collapse border border-gray-300 w-full">
							<thead style={{ textAlign: "left" }}>
								<tr>
									<th className="border px-4 py-2">Month</th>
									<th className="border px-4 py-2">Amount</th>
								</tr>
							</thead>
							<tbody>
								{analyticsData[selectedMetric].map((value, index) => (
									<tr key={index}>
										<td className="border px-4 py-2">{`Month ${index + 1}`}</td>
										<td className="border px-4 py-2">${value}</td>
									</tr>
								))}
							</tbody>
						</table>
					) : (
							<div className="mt-4">
								{selectedMetric === "stock-minced-meat-august" && (
									<p>Expected Stock for Minced Meat in August: {analyticsData[selectedMetric]} kg</p>
								)}
								{selectedMetric === "most-popular-dish" && <p>Most Popular Dish: {analyticsData[selectedMetric]}</p>}
								{selectedMetric === "least-popular-dish" && <p>Least Popular Dish: {analyticsData[selectedMetric]}</p>}
							</div>
						)}
				</div>
			</div>
		</div>
	);
}
