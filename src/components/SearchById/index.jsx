import { useDispatch } from "react-redux";
import { useState } from "react";

import { getProfileThunk } from "../../store/modules/profile/thunk";
import { Button } from "../../pages/Lists/Students/styled";

const SearchById = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState(0);

  return (
    <>
      <br />
      <input
        type="number"
        onChange={(e) => setId(Number(e.target.value))}
        placeholder="Insira ID"
      />
      <br />
      <Button onClick={() => dispatch(getProfileThunk(id))}>
        Obter Informações
      </Button>
    </>
  );
};

export default SearchById;
