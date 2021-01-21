import {useEffect, useState} from 'react';
import AlertFlag from '../../../components/AlertFlag';
import {useSelector, useDispatch} from  'react-redux';
import {listActivitiesThunk, deleteActivitiesThunk} from '../../../store/modules/activities/thunk';
import { motion } from "framer-motion";
import Table from '../../../components/Table';

const Activities = () => {
  const dispatch = useDispatch();
  const [alertState, setAlertState] = useState(false)
  const activities = useSelector((state) => state.activities);

  useEffect(() => {
    dispatch(listActivitiesThunk());
  }, [dispatch]);

  const handleExclusion = (id) =>{
    dispatch(deleteActivitiesThunk(id))
    setAlertState(true)
  }

  alertState && setTimeout(() => setAlertState(false), 3000)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >    
        {alertState && <AlertFlag severity="success" text="Atividade excluida com sucesso"/>}
        <Table
        title="Atividades"
        info="Data"
        details="Detalhes"
        remove="Excluir"
        data={activities}
        detailsRoute="activities"
        registerRoute="activitiesregister"
        handleRemove={handleExclusion}
        />
    </motion.div>
  );
};

export default Activities;
