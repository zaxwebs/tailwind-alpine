const options = {
	chart: {
		height: 350,
		type: "area",
	},
	dataLabels: {
		enabled: false,
	},
	series: [
		{
			name: "ZW",
		},
	],
	title: {
		text: "Demo Chart",
	},
	noData: {
		text: "Loading...",
	},
	xaxis: {
		type: "datetime",
	},
}

const chart = new ApexCharts(document.querySelector("#chart"), options)

chart.render()
