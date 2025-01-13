import React from "react";
import ThreeWordsView from "./view";
import ThreeWordsViewModel from "./viewModel";

function ThreeWordsPage() {
	const viewModel = ThreeWordsViewModel();
	return <ThreeWordsView viewModel={viewModel}></ThreeWordsView>;
}

export default ThreeWordsPage;
