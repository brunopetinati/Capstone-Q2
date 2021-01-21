import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import { getProfileThunk } from "../../store/modules/profile/thunk";
import { Button } from "../../pages/Lists/Students/styled";
import { Flex } from "./styles";

const SearchById = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const history = useHistory();

  return (
    <>
      <br />
      <input
        type="number"
        onChange={(e) => setId(Number(e.target.value))}
        placeholder="Inserir ID do aluno"
        data-testid="test"
      />
      <br />
      <Flex>
        <Button onClick={() => history.push("/students")}>Voltar</Button>
        <Button
          onClick={() => dispatch(getProfileThunk(id))}
          data-testid="testbutton"
        >
          Obter Informações
        </Button>
      </Flex>
    </>
  );
};

export default SearchById;
