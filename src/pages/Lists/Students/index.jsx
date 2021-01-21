import { Background, Button, SmallContainer } from "./styled";
import Students from "../../../components/GetStudents/index";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

const StudentsPage = () => {
  const history = useHistory();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Background>
        <Students />
      </Background>
    </motion.div>
  );
};

export default StudentsPage;
