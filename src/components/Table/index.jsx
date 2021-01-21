import {
    Container,
    StyledTable,
    TableHead,
    TableRow,
    TableCell,
    Icon
} from './style';
import {Link, useHistory} from 'react-router-dom';
import {ImBin2} from 'react-icons/im';

const Table = ({title, info, details, remove, data, detailsRoute, registerRoute, handleRemove}) =>{
    const history = useHistory();
    return(
        <Container>
            <StyledTable>
                <TableRow>
                    <TableHead>{title}</TableHead>
                    <TableHead>{info}</TableHead>
                    <TableHead>{details}</TableHead>
                    <TableHead>{remove}</TableHead>
                </TableRow>
            {data.map((item, index) =>{
                return(
                    <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell><Link to={`/${detailsRoute}/${item.id}`}>+ detalhes</Link></TableCell>
                        <TableCell><Icon onClick={() => {handleRemove(item.id)}}><ImBin2/></Icon></TableCell>
                    </TableRow>
                )
            })}
            </StyledTable>
            <button onClick={() => history.push(`/${registerRoute}`)}>Cadastrar</button>
        </Container>
    )
}

export default Table