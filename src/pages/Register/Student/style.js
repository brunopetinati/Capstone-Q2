import styled from 'styled-components';

export const Container = styled.div `
    background-color: #b8d3ff;
    color: #1D3557;
    height: 100vh;
    display: flex;
    align-items: center;
`
export const Form = styled.form `
    background-color: #fff;
    padding: 2%;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;
    height: 80vh;
    margin: auto;
`
export const Input = styled.input `
    border: 1px solid #707070;
    height: 35px;
    padding-left: 2%;
`
export const TextArea = styled.textarea `
    border: 1px solid #707070;
    width: 600px;
    padding-left: 2%;
    resize: none;
`
export const StudentInfo = styled.div `
    display: flex;
    width: 45vw;
    justify-content: space-between;
`
export const ButtonContainer = styled.div `
    width: 45vw;
    display: flex;
    justify-content: space-around;
`

export const Button = styled.button `
    width: 180px;
    height: 35px;
    font-size: 1.3rem;
    background-color: #C4C4C4;
    border: 1px solid #707070;
`
export const Title = styled.h1 `
    font-family: 'Nunito', sans-serif;
    color: #1D3557;
`
export const Error = styled.div `
    color: #cc0000;
    font-size: 0.8rem;
`