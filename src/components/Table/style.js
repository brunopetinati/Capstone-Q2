import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const StyledTable = styled.table `
    width: 80vw;
`
export const TableHead = styled.th `
    text-align: center;
    height: 30px;
    border-bottom: 1px solid #d9d9d9;
    border-right: 1px solid #d9d9d9;
    padding: 1%;
    color: #00273d;
    &:nth-last-child(1){
        border-right: none;
    }
    &:nth-last-child(4){
        text-align: left;
    }
`
export const TableRow = styled.tr `
    height: 45px;
`
export const TableCell = styled.td `
    padding: 1%;
    border-bottom: 1px solid #d9d9d9;
    text-align: center;
    &:nth-last-child(4){
        text-align: left;
        width: 400px;
    }
`
export const Container = styled.div `
    width: 80vw;
    height: 350px;
    background-color: #fff;
    padding: 2%;
    margin: auto;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Icon = styled.div `
    color: #00273d;
    &:hover{
        color: #da1b2b;
    }
`
export const StyledLink = styled(Link) `
    color: #00273d;
    text-decoration: none;
    &:hover{
        color: #da1b2b;
    }
`