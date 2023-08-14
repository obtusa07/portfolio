import React from 'react'
import styled from "@emotion/styled";
import { forwardRef } from 'react';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: pink;
`;

export const D = forwardRef((props, ref) => {
  return (
    <Container ref={ref}>D</Container>
  );
});

export default D;