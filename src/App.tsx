import React from "react";
import style from "./App.module.scss";
import Navbar from "./ui/Navbar";
import PageHeader from "./ui/PageHeader";

function App() {
  return (
    <div className={style.app}>
      <Navbar />
      <PageHeader pageTitle="My Profile" />
    </div>
  );
}

export default App;
