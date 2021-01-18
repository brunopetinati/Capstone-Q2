import { Background, Box } from "./styled";
import Students from "../../../components/GetStudents/index";
import Header from "../../../components/Header/index";

const StudentsPage = () => {
  return (
    <>
      <Header />
      <Background>
        <Box>
          <Students />
        </Box>
      </Background>
    </>
  );
};

export default StudentsPage;
