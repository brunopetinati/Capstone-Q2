import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a8dadc;
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  width: 60vw;
  height: 55vh;
  border-radius: 50px;
  @media (max-width: 600px) {
    width: 80vw;
    height: 80vh;
  }
`;
