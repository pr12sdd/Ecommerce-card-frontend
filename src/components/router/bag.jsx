import { useSelector } from "react-redux";
import BagItems from "../bagItems";
import BagSummary from "../bagSummary";

function Bag() {
  const item = useSelector((store) => store.bagitemreducer);

  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {item.map((element) => (
              <BagItems item={element} />
            ))}
          </div>
          <div className="bag-summary">
            <BagSummary />
          </div>
        </div>
      </main>
    </>
  );
}
export default Bag;
