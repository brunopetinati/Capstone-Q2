import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const Activity = () => {
  const { id } = useParams();
  const activities = useSelector((state) => state.activities);
  const activity = activities.filter((activity) => activity.id === id);
  //Fran, coloquei o framer-motion nessa página e estou com medo dela não estar funcionando por conta disso,
  //verifica e me fala depois, ok?

  console.log(activity);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      {activity.map(({ name, date, description, students, link }, index) => {
        return (
          <div key={index}>
            <h1>{name}</h1>
            <p>{date}</p>
            <p>{description}</p>
            <a href={link} target="blank">
              {link}
            </a>
            <ul>
              {students.map((student, index) => {
                return <li key={index}>{student}</li>;
              })}
            </ul>
          </div>
        );
      })}
    </motion.div>
  );
};

export default Activity;
