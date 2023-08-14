import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: aqua;
`;

const Button = styled.div`
    border: 0;
    color: #fff;
    background-color: #ff5722;
    cursor: pointer;
    padding: 8px 16px;
    border-radius: 4px;
`;

export const A = ({currentRef}) => {

    const onClicked = (e) => {
        e.preventDefault();
        currentRef.current.scrollIntoView({behavior: "smooth"});
    };

  return (
    <Container>
        <Button onClick={onClicked}>버튼버튼</Button>
    </Container>
  )
}

export default A;