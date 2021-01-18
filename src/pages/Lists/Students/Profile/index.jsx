import { Background, Box } from "./styled";
import Profile from "../../../../components/GetProfile/index";
import SearchById from "../../../../components/SearchById/index";
import Header from "../../../../components/Header/index";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <Background>
        <Box>
          <Profile />
        </Box>
        <SearchById />
      </Background>
    </>
  );
};

export default ProfilePage;
