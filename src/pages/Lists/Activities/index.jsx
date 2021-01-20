import { Component, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { DataGrid, ColDef, RowsProp } from "@material-ui/data-grid";
import {
  Table,
  TableRow,
  TableHead,
  TableCell,
  Anchor,
  Container,
} from "./style";
import { Button } from "../../Register/Activities/style";
import { useSelector, useDispatch } from "react-redux";
import { listActivitiesThunk } from "../../../store/modules/activities/thunk";
import { motion } from "framer-motion";

const Activities = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const activities = useSelector((state) => state.activities);
  let rows = [];
  let columns = [];

  useEffect(() => {
    dispatch(listActivitiesThunk());
  }, [dispatch]);

  activities.map((activity) => {
    rows = [
      ...rows,
      { id: activity.id, col1: activity.name, col2: activity.data },
    ];
    columns = [
      { field: "col1", headerName: "Atividade", width: 650 },
      { field: "col2", headerName: "Data", width: 150 },
      {
        field: "col3",
        headerName: "Detalhes",
        renderCell: () => (
          <button onClick={() => history.push(`/activities/${activity.id}`)}>
            + detalhes
          </button>
        ),
        width: 150,
      },
    ];
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Button onClick={() => history.push("/activitiesregister")}>
        Cadastrar
      </Button>

      <Container>
        <div style={{ height: 300, width: "100%" }}>
          <DataGrid columns={columns} rows={rows} />
        </div>
      </Container>
    </motion.div>
  );
};

export default Activities;
