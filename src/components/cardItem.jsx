import { useDispatch, useSelector } from "react-redux";
import { bagitemaction } from "./store/bagitemslice";
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { summaryaction } from "./store/bagsummaryslice";

function CardItem({ item }) {
  const status = useSelector((store) => store.bagitemreducer);
  const result = status.includes(item);
  const dispatch = useDispatch();
  function handleaddtobag() {
    dispatch(
      bagitemaction.addbagitems({
        num: item,
      })
    );
    dispatch(
      summaryaction.summary({
        num: item,
      })
    );
  }
  function handleremove() {
    dispatch(
      bagitemaction.removebagitems({
        num: item,
      })
    );
    dispatch(
      summaryaction.removal({
        num: item,
      })
    );
  }
  return (
    <>
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>

        {!result && (
          <button
            className="btn-add-bag btn btn-success"
            onClick={handleaddtobag}
          >
            <IoMdAddCircle /> Add to Bag
          </button>
        )}
        {result && (
          <button className="btn-add-bag btn btn-danger" onClick={handleremove}>
            <MdDelete />
            Remove
          </button>
        )}
      </div>
    </>
  );
}
export default CardItem;
