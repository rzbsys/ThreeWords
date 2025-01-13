import { useState, useEffect } from "react";

interface WordInfoType {
	word: string;
	link: string;
}

function ThreeWordsViewModel() {
	const now = new Date();
	const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
	const koreaTimeDiff = 9 * 60 * 60 * 1000;
	const korNow = new Date(utc + koreaTimeDiff);
	// yyyy-mm-dd
	const year = korNow.getFullYear();
	let month =
		korNow.getMonth() + 1 < 10
			? "0" + (korNow.getMonth() + 1)
			: korNow.getMonth() + 1;
	const day = korNow.getDate();
	const discussionId = `${year}-${month}-${day}`;

	const onDetailButtonClick = () => {
		window.open(
			"https://github.com/rzbsys/ThreeWords/blob/main/readme.md",
			"_blank",
			"noopener, noreferrer"
		);
	};

	const [words, setWords] = useState<WordInfoType[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(
				`https://raw.githubusercontent.com/rzbsys/ThreeWordsStorage/refs/heads/main/${discussionId}.json`
			);
			const data = await response.json();
			setWords(data);
		};
		fetchData();
	}, []);

	return { discussionId, onDetailButtonClick, words };
}

export default ThreeWordsViewModel;
