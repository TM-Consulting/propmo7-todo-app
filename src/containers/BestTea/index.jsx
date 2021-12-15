import Tea from "../../components/Tea";
import { teaData } from "../../utils/constants";
import CustomHeader from "../../components/CustomHeader";
import "./index.css";
const BestTea = () => {
  return (
    <article>
      <CustomHeader title="Choisisser votre the" />
      {/* {teaData.map(item=><Tea image={item.image} title={item.title}/>)} */}
      {teaData.map((item) => (
        <Tea {...item} />
      ))}
      <Tea />
    </article>
  );
};

export default BestTea;
