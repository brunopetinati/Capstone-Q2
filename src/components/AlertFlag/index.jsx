import {Alert} from '@material-ui/lab';
import {Container} from './style'

const AlertFlag = ({text, severity}) =>{
    return(
        <Container>
            <Alert severity={severity}>{text}</Alert>
        </Container>
        
    )
}

export default AlertFlag