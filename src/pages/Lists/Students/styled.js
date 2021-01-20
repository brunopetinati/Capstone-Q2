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

export const Button = styled.button`
  margin-top: 2vh;
  width: 180px;
  height: 35px;
  font-size: 1rem;
  background-color: #c4c4c4;
  border: 1px solid #707070;
  @media (max-width: 400px) {
    width: 110px;
    font-size: 10px;
  }
`;

export const SmallContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60vh;
  margin-top: 2vh;
`;
