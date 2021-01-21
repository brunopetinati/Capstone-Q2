import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunk";
import { Container, Name, Group, PostScript } from "./styles";
import { motion } from "framer-motion";
import {useParams, useHistory} from 'react-router-dom';
import {Button} from '../../pages/Login/style';

const Profile = () => {
  const {id} = useParams();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.profile);
  const history = useHistory();

  console.log(student);

  useEffect(() => {
    dispatch(getProfileThunk(id));
  }, [dispatch]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container>
        <Name>{student.name}</Name>
        <Group>{student.group}</Group>
      </Container>
      <PostScript>{student.postscript}</PostScript>
      <Button onClick={() => history.push("/students")}>Voltar</Button>
    </motion.div>
  );
};

export default Profile;
