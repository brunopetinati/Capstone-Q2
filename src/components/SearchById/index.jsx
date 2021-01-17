import { useDispatch } from "react-redux";
import { useState } from "react";

import { getProfileThunk } from "../../store/modules/profile/thunk";

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
      <button onClick={() => dispatch(getProfileThunk(id))}>
        Obter Informações
      </button>
    </>
  );
};

export default SearchById;
