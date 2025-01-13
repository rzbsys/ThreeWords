import { media } from "@styles/media";
import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
`;

const HeaderTitleText = styled.h1`
	font-size: 1.3rem;
	margin-left: 30px;

	${media.phone`;
        margin-left: 15px;
    `}
`;

function Header() {
	return (
		<HeaderContainer>
			<HeaderTitleText>
				<span style={{ color: "#4de2a9" }}>#THREE</span>WORDS
			</HeaderTitleText>{" "}
		</HeaderContainer>
	);
}

export default Header;
