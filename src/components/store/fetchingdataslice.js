import { createSlice } from "@reduxjs/toolkit";

const fetchingdataslice=createSlice(
  {
    name:"fetchingdata",
    initialState:{
      fetchingdone:false,
      fetchingdata:false
    },
    reducers:{
      fetchingdonereducer:(state)=>{
         state.fetchingdone=true
      },
      fetchingstartedreducer:(state)=>{
        state.fetchingdata=true
      },
      fetchingstopreducer:(state)=>{
        state.fetchingdata=false;
      }
    }
  }
)
export const fetchingdataaction=fetchingdataslice.actions;

export default fetchingdataslice;