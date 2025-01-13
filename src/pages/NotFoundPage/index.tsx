import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const TitleText = styled.h1`
	color: #202632;
`;

const SubTitleText = styled.h2`
	color: #727478;
	font-size: 1.2rem;
	font-weight: 600;
`;

const GoBackButton = styled.button`
	background-color: #4de2a9;
	border: none;
	color: white;
	padding: 15px 32px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	transition: 0.3s;
	margin-top: 20px;
	border-radius: 15px;
	font-weight: 600;

	&:hover {
		opacity: 0.8;
		transform: translateY(-5px);
	}
`;

function NotFoundPage() {
	const navigate = useNavigate();

	const onGoHomeButtonClick = () => {
		navigate("/");
	};

	return (
		<NotFoundContainer>
			<TitleText>페이지가 존재하지 않는것 같아요.</TitleText>
			<SubTitleText>정상적인 경로로 접근했는지 확인해주세요.</SubTitleText>
			<GoBackButton onClick={onGoHomeButtonClick}>
				메인페이지로 돌아가기
			</GoBackButton>
		</NotFoundContainer>
	);
}

export default NotFoundPage;
