import "./App.css";
import Footer from "../footer";
import Header from "../header";
import Card from "./card";
import Bag from "./bag";
import { Outlet } from "react-router";
import Loader from "../loader";
import FetchingData from "../fetchingdata";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const data = useSelector((store) => store.fetchdatareducer);
  console.log(data);
  return (
    <>
      <Header />
      <FetchingData />
      {data.fetchingdone === false && data.fetchingdata === true && <Loader />}
      {data.fetchingdone === true && data.fetchingdata === false && <Outlet />}
      <Footer />
    </>
  );
}
export default App;
