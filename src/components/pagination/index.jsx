
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import {
    Container,
    Button,
    Number,
} from './style';
import {useState} from 'react';

const Pages = ({items, setLastIndex, setNextPage, lastIndex, nextPage}) =>{
    const [pageNumber, setPageNumber] = useState(1)
    const totalPages = items.length / 7;

    const Next = () =>{
        if(pageNumber < totalPages){
            setPageNumber(pageNumber + 1)
            setLastIndex(lastIndex + 7)
            setNextPage(nextPage + 7)
        }  
    }

    const Prev = () =>{
        if(pageNumber > 1){
            setPageNumber(pageNumber - 1)
            setLastIndex(lastIndex - 7)
            setNextPage(nextPage - 7)
        } 
    }

    return(
        <Container>
           <Button onClick={Prev}><AiOutlineArrowLeft/></Button> 
           <Number>{pageNumber}</Number>
           <Button onClick={Next}><AiOutlineArrowRight/></Button> 
        </Container>
    )
}

export default Pages