import React from "react";
import styles from "./App.module.css";
import { fetchData, Order, fetchDataWithComma } from "./api";
import "./components/font-awesome/index";
import AddToHomescreen from "./AddToHomescreen";

import loadable from "@loadable/component";
const Cards = loadable(() => import("./components/Cards/Cards"));
const Charts = loadable(() => import("./components/Charts/Charts"));
const Statepicker = loadable(() =>
	import("./components/Statepicker/Statepicker")
);
const Button = loadable(() => import("./components/buttons/buttons"));
const Header = loadable(() => import("./components/header/header"));
const Comparisons = loadable(() =>
	import("./components/Comparison/comparison")
);
const Footer = loadable(() => import("./components/footer/footer"));

class App extends React.Component {
	state = {
		dataForCharts: {},
		dataForCards: {},
		state: "",
		showChart: false,
		ButtonName: "Charts",
		showComparison: false,
		ButtonName2: "Compare",
		Order: [],
		showCard: true,
	};

	async componentDidMount() {
		const dataForCards = await fetchDataWithComma("Total");
		const dataForCharts = await fetchData("Total");
		this.setState({
			dataForCards: dataForCards,
			dataForCharts: dataForCharts,
			state: "India",
		});
	}

	handleStateChange = async (state) => {
		const dataForCards = await fetchDataWithComma(state);
		const dataForCharts = await fetchData(state);
		this.setState({
			dataForCards: dataForCards,
			dataForCharts: dataForCharts,
			state: state,
		});
	};

	handleCompare = async () => {
		const order = await Order();
		this.setState({ Order: order });
	};

	clickEventHandler = () => {
		const ClickHandler = this.state.showChart;
		let ButtonName = this.state.ButtonName;
		ClickHandler ? (ButtonName = "Charts") : (ButtonName = "Home");
		this.setState({
			showChart: !ClickHandler,
			ButtonName: ButtonName,
			showCard: ClickHandler,
			showComparison: false,
			ButtonName2: "Compare",
		});
	};

	clickEventHandler2 = () => {
		const ClickHandler = this.state.showComparison;
		let ButtonName2 = this.state.ButtonName2;
		ClickHandler ? (ButtonName2 = "Compare") : (ButtonName2 = "Home");
		this.setState({
			showComparison: !ClickHandler,
			ButtonName2: ButtonName2,
			showCard: ClickHandler,
			showChart: false,
			ButtonName: "Charts",
		});

		this.handleCompare();
	};

	render() {
		const { dataForCards, dataForCharts, state, Order } = this.state;

		return (
			<div className={styles.main}>
				<AddToHomescreen />
				<Header />
				<div className={styles.center}>
					<Statepicker handleStateChange={this.handleStateChange} />
					<Button
						click1={this.clickEventHandler}
						name1={this.state.ButtonName}
						click2={this.clickEventHandler2}
						name2={this.state.ButtonName2}
					/>

					{this.state.showChart ? (
						<Charts data={dataForCharts} state={state} />
					) : null}

					{this.state.showComparison ? <Comparisons order={Order} /> : null}

					{this.state.showCard ? <Cards data={dataForCards} /> : null}
				</div>
				<div className={styles.footer}>
					<Footer />
				</div>
			</div>
		);
	}
}

export default App;
