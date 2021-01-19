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
  width: 50vw;
  height: 45vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 797px) {
    width: 30vw;
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
  height: 30px;
  border: 1px solid #dddddd;
  padding: 5px;
  width: 25vw;
  font-size: 0.7em;
  outline: none;
  border-radius: 5px;

  :focus {
    box-shadow: 0 0 5px rgba(0, 96, 206, 1);
    border: 1px solid rgba(0, 96, 206, 1);
  }
  // @media (max-width: 1000px) {
  //   width: px;
  // }
`;

const Button = styled.button`
  background-color: #da1b2b;
  color: #fff;
  border: none;
  height: 30px;
  width: 15vw;
  border-radius: 10px;
  font-weight: 100;
  margin-left: 25%;
  margin-top: 5%;
  outline: none;
  cursor: pointer;
`;

export { Container, FormContainer, Button, Title, Error, Input };
