import {Alert} from '@material-ui/lab';

const AlertFlag = ({text, severity}) =>{
    return(
        <Alert severity={severity}>{text}</Alert>
    )
}

export default AlertFlag