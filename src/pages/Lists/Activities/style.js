import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Container = styled.div `
    display:flex;
    flex-direction: column;
    background-color: #fff;
    width: 80vw;
    margin: 2% auto;
    align-items: center;
    justify-content: center;
`
export const StyledLink = styled(Link) `
    color: #707070;
    text-decoration: none;
    &:hover{
        color: #da1b2b;
    }
`
export const Icon = styled.div `
    color: #707070;
    &:hover{
        color: #da1b2b;
    }
`
