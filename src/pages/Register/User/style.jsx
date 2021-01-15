import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100vh;
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
export { Container, FormContainer };
