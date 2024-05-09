import { useSelector } from "react-redux";
import CardItem from "../cardItem";
import Loader from "../loader";

function Card() {
  const data = useSelector((store) => store.itemreducer);

  return (
    <>
      <main>
        <div className="items-container">
          {data.map((element) => (
            <CardItem key={element.id} item={element} />
          ))}
        </div>
      </main>
    </>
  );
}
export default Card;
