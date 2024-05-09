import { createSlice } from "@reduxjs/toolkit";

const bagitemslice=createSlice({
  name: "bagitem",
  initialState:[],
  reducers:{
    addbagitems:(state,action)=>{
    state.push(action.payload.num);
  },
  removebagitems:(state,action)=>{
     const newArr= state.filter((element)=>element.id!==action.payload.num.id)
     return newArr;
  },
  removewhole:(state)=>{
    return [];
  }
  }
})

export const bagitemaction=bagitemslice.actions;
export default bagitemslice;