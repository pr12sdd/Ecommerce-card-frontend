import { useDispatch, useSelector } from "react-redux";
import { fetchingdataaction } from "./store/fetchingdataslice";
import { useEffect } from "react";
import { itemactions } from "./store/carditemslice";

//This is basically the headless component.

function FetchingData() {
  const dispatch = useDispatch();
  const data1 = useSelector((store) => store.fetchdatareducer);

  useEffect(() => {
    if (data1.fetchingdone === true) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchingdataaction.fetchingstartedreducer());

    fetch("https://ecommerce-card-backend.onrender.com/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(
          itemactions.additems({
            num: items,
          })
        );
        dispatch(fetchingdataaction.fetchingstopreducer());
        dispatch(fetchingdataaction.fetchingdonereducer());
      });
    return () => {
      console.log("Cleanup function has been called");
      controller.abort();
    };
  }, [data1]);

  return <></>;
}
export default FetchingData;
