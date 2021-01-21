import { Background, Box } from "./styled";
import Profile from "../../../../components/GetProfile/index";
import { motion } from "framer-motion";

const ProfilePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Background>
        <Box>
          <Profile />
        </Box>
      </Background>
    </motion.div>
  );
};

export default ProfilePage;
