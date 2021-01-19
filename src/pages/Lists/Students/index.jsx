import { Background, Box } from "./styled";
import Students from "../../../components/GetStudents/index";

const StudentsPage = () => {
  return (
    <>
      <Background>
        <Box>
          <Students />
        </Box>
      </Background>
    </>
  );
};

export default StudentsPage;
