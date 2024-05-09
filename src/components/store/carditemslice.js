import {combineReducers, configureStore, createSlice} from "@reduxjs/toolkit";
import { DEFAULT_ITEMS } from "../../../../1-pre-built-bundle/old-clone/data/items";

const sliceitem=createSlice({
  name:'item',
  initialState:[],
  reducers:{
    additems:(state,action)=>{
      return action.payload.num;
    }
  }
});

export const itemactions=sliceitem.actions;

export default sliceitem;