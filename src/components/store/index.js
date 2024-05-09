import {combineReducers, configureStore} from "@reduxjs/toolkit";
import sliceitem from "./carditemslice";
import bagitemslice from "./bagitemslice";
import bagsummaryslice from "./bagsummaryslice";
import fetchingdataslice from "./fetchingdataslice";


const reducer=combineReducers(
  {
    itemreducer:sliceitem.reducer,
    fetchdatareducer:fetchingdataslice.reducer,
    bagitemreducer:bagitemslice.reducer,
    bagsummaryreducer:bagsummaryslice.reducer,
  }
)
const store=configureStore(
  {
    reducer,
  }
)


export default store;




