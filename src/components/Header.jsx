import pieChart from "../assets/pieChart.svg";

export default function Header() {
	return (
		<div className="header-wrapper">
			<a href="https://github.com/kryturek/" target="_blank">
				<img src={pieChart} className="logo" alt="All-seeing pieChart" />
			</a>
			<h1 className="title">TODO</h1>
		</div>
	);
}
