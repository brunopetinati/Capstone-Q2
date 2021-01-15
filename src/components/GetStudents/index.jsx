import { DataGrid } from "@material-ui/data-grid";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getStudentsThunk } from "../../store/modules/students/thunk";

const Students = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.students);

  console.log(students);

  useEffect(() => {
    dispatch(getStudentsThunk());
  }, [dispatch]);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nome", width: 130 },
    { field: "group", headerName: "Grupo", width: 130 },
    { field: "postscript", headerName: "Descrição", width: 380 },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        checkboxSelection
      />
    </div>
  );
};

export default Students;
