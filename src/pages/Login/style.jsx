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
// const HeaderMobile = styled.div`
//   background-color: #bb1e1e;
//   width: 100vw;
//   height: 110px;
//   display: flex;
//   justify-content: center;

//   @media (min-width: 1000px) {
//     display: none;
//   }
// `;

<<<<<<< HEAD
const HeaderDesktop = styled.div`
  background-color: #bb1e1e;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  width: 100vw;
  @media (max-width: 1000px) {
    display: none;
  }
`;
=======
// const HeaderDesktop = styled.div`
//   display: flex;
//   justify-content: space-around;
//   padding: 10px;
//   width: 100vw;
//   @media (max-width: 1000px) {
//     display: none;
//   }
// `;
>>>>>>> 5b495ada72d55ca2d3df522967ed6c75bc408d17
const FormContainer = styled.div`
  background-color: white;
  width: 30vw;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (min-width: 1000px) {
    width: 30vw;
  }
`;

// export { Container, HeaderMobile, HeaderDesktop, FormContainer };
export { Container, FormContainer };
