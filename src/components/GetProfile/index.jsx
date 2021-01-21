import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunk";
import { Container, Name, Group, PostScript } from "./styles";
import { motion } from "framer-motion";

const Profile = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.profile);

  useEffect(() => {
    dispatch(getProfileThunk());
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
    </motion.div>
  );
};

export default Profile;
