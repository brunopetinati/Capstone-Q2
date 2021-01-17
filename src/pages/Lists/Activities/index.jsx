import { useSelector } from "react-redux";
import Header from "../../../components/Header/index";

const Activities = () => {
  const activities = useSelector((state) => state.activities);
  console.log(activities);
  return (
    <>
      <Header />
      <ul>
        {activities.map((activity, index) => {
          return (
            <li key={index}>
              {activity.name}--------{activity.date}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Activities;
