import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStudentsThunk,
  deleteStudentThunk,
} from "../../store/modules/students/thunk";
import { DataGrid } from "@material-ui/data-grid";
import { Alert } from "@material-ui/lab";
import { ImBin2 } from "react-icons/im";
import { Box } from "./styles";
import { StyledLink, Icon } from "../../pages/Lists/Activities/style";

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);
  const [alertState, setAlertState] = useState(false);
  let rows = [];
  let columns = [];

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

  const handleExclusion = (id) => {
    dispatch(deleteStudentThunk(id));
    setAlertState(true);

    /* students.map((student) => {
      rows = [
        ...rows,
        { id: student.id, col1: student.name, col2: student.group },
      ];
      columns = [
        { field: "col1", headerName: "ID", width: 550 },
        { field: "col2", headerName: "Nome", width: 150 },
        {
          field: "col3",
          headerName: "Grupo",
          renderCell: () => (
            <StyledLink to={`/profile/${student.id}`}>+ detalhes</StyledLink>
          ),
          width: 150,
        },
        {
          field: "col4",
          headerName: "Excluir",
          width: 100,
          renderCell: () => (
            <Icon onClick={() => handleExclusion(student.id)}>
              <ImBin2 />
            </Icon>
          ),
        },
      ];
    }); */

    alertState && setTimeout(() => setAlertState(false), 3000);

    const columns2 = [
      { field: "id", headerName: "ID", width: 70 },
      { field: "name", headerName: "Nome", width: 130 },
      { field: "group", headerName: "Grupo", width: 130 },
      { field: "postscript", headerName: "Descrição", width: 780 },
    ];

    return (
      <Box>
        <DataGrid rows={students} columns={columns2} autoPageSize={true} />
      </Box>
    );
  };
};

export default Students;
