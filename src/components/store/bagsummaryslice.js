import { createSlice } from "@reduxjs/toolkit";

const bagsummaryslice=createSlice({
  name:"bagsummary",
  initialState:[{
    totalItem: 0,
    totalMRP: 0,
    totalDiscount: 0,
    finalPayment: 0,
  }],
  reducers:{
    summary:(state,action)=>{
      {
      state[0].totalItem+=1,  
      state[0].totalMRP+=action.payload.num.original_price,
        
      state[0].totalDiscount+=action.payload.num.discount_percentage,
      
      state[0].finalPayment+=action.payload.num.current_price+(state[0].totalItem===1 && 99)
    
    }
    },
    removal:(state,action)=>{
      state[0].totalItem-=1,
      state[0].totalMRP-=action.payload.num.original_price,
        
      state[0].totalDiscount-=action.payload.num.discount_percentage,
      
      state[0].finalPayment-=action.payload.num.current_price+
      (state[0].totalItem===0 && 99)

      
    },
    removewhole:(state)=>{
      {state[0].totalItem=0,
      state[0].totalDiscount=0,
      state[0].finalPayment=0,
      state[0].totalMRP=0
      }
    }
  }
})

export const summaryaction=bagsummaryslice.actions;

export default bagsummaryslice;