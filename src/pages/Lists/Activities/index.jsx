import { useEffect, useState } from "react";
import AlertFlag from "../../../components/AlertFlag";
import { useSelector, useDispatch } from "react-redux";
import {
  listActivitiesThunk,
  deleteActivitiesThunk,
} from "../../../store/modules/activities/thunk";
import { motion } from "framer-motion";
import Table from "../../../components/Table";
import Pages from "../../../components/pagination";
import { Container, Centralize } from "./style";

const Activities = () => {
  const dispatch = useDispatch();
  const [alertState, setAlertState] = useState(false);
  const activities = useSelector((state) => state.activities);
  const [lastIndex, setLastIndex] = useState(0);
  const [nextPage, setNextPage] = useState(5);

  useEffect(() => {
    dispatch(listActivitiesThunk());
  }, [dispatch]);

  const handleExclusion = (id) => {
    dispatch(deleteActivitiesThunk(id));
    setAlertState(true);
  };

  const page = activities.slice(lastIndex, nextPage);

  alertState && setTimeout(() => setAlertState(false), 3000);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Centralize>
        <Container>
          <Pages
            items={activities}
            setLastIndex={setLastIndex}
            setNextPage={setNextPage}
            lastIndex={lastIndex}
            nextPage={nextPage}
          />

          {alertState && (
            <AlertFlag
              severity="success"
              text="Atividade excluida com sucesso"
            />
          )}
          <Table
            title="Atividades"
            info="Data"
            details="Detalhes"
            remove="Excluir"
            data={page}
            isActivity={true}
            detailsRoute="activities"
            registerRoute="activitiesregister"
            handleRemove={handleExclusion}
          />
        </Container>
      </Centralize>
    </motion.div>
  );
};

export default Activities;
