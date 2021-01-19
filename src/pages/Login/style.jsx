import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 75vh;
  width: 100vw;
  background-color: #a8dadc;
  @media (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  width: 30vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 1000px) {
    width: 30vw;
  }
`;
const Button = styled.button`
  width: 180px;
  height: 35px;
  font-size: 1.3rem;
  background-color: #c4c4c4;
  border: 1px solid #707070;
  @media (min-width: 250px) {
    width: 100px;
  }
`;
const Title = styled.h1`
  font-family: "Nunito", sans-serif;
  color: #1d3557;
`;
const Error = styled.div`
  color: #cc0000;
  font-size: 0.8rem;
`;
const Input = styled.input`
  border: 1px solid #707070;
  height: 35px;
  @media (min-width: 500px) {
    width: 100px;
  }
`;

export { Container, FormContainer, Button, Title, Error, Input };
