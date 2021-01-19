import { Background, Box } from "./styled";
import Profile from "../../../../components/GetProfile/index";
import SearchById from "../../../../components/SearchById/index";

const ProfilePage = () => {
  return (
    <>
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
