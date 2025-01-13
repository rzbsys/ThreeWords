import Header from "@components/Header";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { media } from "@styles/media";
import Giscus from "@giscus/react";

const ThreeWordsContainer = styled.div`
	width: 100%;
	height: 100%;
`;

const ThreeWordsSection = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;

	${media.phone`;
        flex-direction: column;
    `}
`;
const ThreeWordsTitle = styled.h1`
	font-size: 1.5rem;
	margin-bottom: 10px;
	color: #202632;
	text-align: center;
	margin-top: 30px;
`;

const ThreeWordsSubTitle = styled.h2`
	text-align: center;
	font-size: 1.1rem;
	font-weight: 500;
	color: #202632;
	margin: 0px 30px;
	word-break: keep-all;
	margin-bottom: 40px;
`;

const WordCard = styled.div`
	width: 300px;
	height: 100px;
	background-color: #f2f2f2;
	border-radius: 10px;
	display: flex;
	justify-content: center;
	align-items: center;

	& > h1 {
		font-size: 1.2rem;
	}
`;

const DiscussionContainer = styled.div`
	width: 80%;
	margin: 0px auto;
	margin-top: 40px;
	height: 100%;
`;

const DetailButton = styled.button`
	width: 400px;
	height: 50px;
	background-color: #4cdca5;
	color: white;
	border: none;
	border-radius: 15px;
	font-size: 1.1rem;
	cursor: pointer;
	transition: 0.3s transform, 0.3s opacity;
	font-weight: 500;
	margin: 0px auto;
	margin-top: 40px;
	display: block;

	&:hover {
		opacity: 0.8;
		transform: translateY(-3px);
	}

	${media.phone`;
        width : calc(100% - 80px);
        margin-left: 40px;
    `}
`;

interface WordInfoType {
	word: string;
	link: string;
}

function ThreeWordsPage() {
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

	const [words, setWords] = useState<WordInfoType[]>([]);
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch("/words");
			const data = await response.json();
			setWords(data);
		};
		fetchData();
	}, []);

	return (
		<ThreeWordsContainer>
			<Header></Header>
			<ThreeWordsTitle>오늘의 3가지 단어를 가져왔어요.</ThreeWordsTitle>
			<ThreeWordsSubTitle>
				단어는 매일 뉴스를 분석하여 그 중 의미있는 단어만 불러와요.
			</ThreeWordsSubTitle>
			<ThreeWordsSection>
				<WordCard>
					<h1>단어1</h1>
				</WordCard>
				<WordCard>
					<h1>단어1</h1>
				</WordCard>
				<WordCard>
					<h1>단어1</h1>
				</WordCard>
			</ThreeWordsSection>

			<DetailButton>왜 3단어가 중요할까요?</DetailButton>
			<DiscussionContainer>
				<Giscus
					repo='rzbsys/ThreeWords'
					repoId='R_kgDONpeFVg'
					mapping='specific'
					categoryId='DIC_kwDONpeFVs4Cl9Ts'
					reactionsEnabled='1'
					strict='0'
					term={discussionId}
					emitMetadata='0'
					inputPosition='top'
					theme='preferred_color_scheme'
					lang='ko'
					loading='lazy'
				></Giscus>
			</DiscussionContainer>
		</ThreeWordsContainer>
	);
}

export default ThreeWordsPage;
