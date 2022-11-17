import { useState } from "react";
import DataUser from "./DataUser";
import List from "./List";

function App () {

  return (
    <>
      <DataUser reload={reload} setReload={setReload}/>
      <List reload={reload} setReload={setReload}/>
    </>
  );
}

export default App;
