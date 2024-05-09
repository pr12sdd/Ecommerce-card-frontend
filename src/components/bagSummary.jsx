import { useDispatch, useSelector } from "react-redux";
function BagSummary() {
  const summary = useSelector((store) => store.bagsummaryreducer);

  return (
    <>
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({summary[0].totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{summary[0].totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹${summary[0].totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{Math.floor(summary[0].finalPayment)}
          </span>
        </div>
      </div>

      <button className="btn-place-order">
        <div className="css-xjhrni">
          <a href="/" style={{ color: "white", textDecoration: "none" }}>
            PLACE ORDER
          </a>
        </div>
      </button>
    </>
  );
}
export default BagSummary;
