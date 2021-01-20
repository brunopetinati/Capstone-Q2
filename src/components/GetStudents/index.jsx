import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getStudentsThunk,
  deleteStudentThunk,
} from "../../store/modules/students/thunk";
import { DataGrid } from "@material-ui/data-grid";
import { ImBin2 } from "react-icons/im";
import { Box, Fix } from "./styles";
import { Icon } from "../../pages/Lists/Activities/style";
import AlertFlag from "../../components/AlertFlag/index";

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
  };

  students.map((student) => {
    rows = [
      ...rows,
      {
        id: student.id,
        col1: student.name,
        col2: student.group,
        col3: student.postscript,
      },
    ];
    columns = [
      { field: "id", headerName: "ID", width: 80 },
      { field: "col1", headerName: "Nome", width: 350 },
      { field: "col2", headerName: "Grupo", width: 150 },
      {
        field: "col3",
        headerName: "Informações",
        width: 400,
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
  });

  alertState && setTimeout(() => setAlertState(false), 3000);

  return (
    <>
      <Fix>
        {alertState && (
          <AlertFlag severity="success" text="Estudante excluido com sucesso" />
        )}
      </Fix>
      <Box>
        <DataGrid rows={rows} columns={columns} autoPageSize={true} />
      </Box>
    </>
  );
};

export default Students;
