import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfileThunk } from "../../store/modules/profile/thunk";
import { Container, Name, Group, PostScript } from "./styles";

const Profile = () => {
  const dispatch = useDispatch();
  const student = useSelector((state) => state.profile);

  console.log(student);

  useEffect(() => {
    dispatch(getProfileThunk());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Name>{student.name}</Name>
        <Group>{student.group}</Group>
      </Container>
      <PostScript>{student.postscript}</PostScript>
    </>
  );
};

export default Profile;
