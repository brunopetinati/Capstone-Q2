import {useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import {
    Container,
    Title,
    Date,
    Header,
    Description,
    StyledLink,
    List,
    ListItem,
    ListContainer,
    Subtitle
} from './style';
import {Button} from '../Register/Activities/style';

const Activity = () =>{
    const {id} = useParams();
    const activities = useSelector(state => state.activities);
    const activity = activities.filter((activity) => activity.id.toString() === id);

    return(
            <Container>
                {activity.map(({name, date, description, students, link}, index) =>{
                    return(
                        <div key={index}>
                            <Header>
                                <Title>{name}</Title>
                                <Date>{date}</Date>
                            </Header>
                            <StyledLink href={link} target="blank">Link da Atividade</StyledLink>
                            <Subtitle>Descrição</Subtitle>
                            <Description>{description}</Description>
                            <ListContainer>
                                <List>
                                    <Subtitle>Alunos</Subtitle>
                                {students.map((student, index) =>{
                                    return(
                                        <ListItem key={index}>{student}</ListItem>
                                    )
                                })}
                                </List>
                            </ListContainer>
                            <Button>Voltar</Button>
                        </div>
                        )
                })}
            </Container>
    )
}

export default Activity