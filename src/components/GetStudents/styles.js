import styled from "styled-components";

export const Box = styled.div`
  margin: 0 auto;
  background-color: white;
  width: 60vw;
  height: 60vh;

  @media (max-width: 1000px) {
    width: 90vw;
    height: 80vh;
    margin-top: 5vh;
  }
`;
