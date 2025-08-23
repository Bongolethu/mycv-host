import React, { lazy } from "react";
import './App.scss';


const Person = lazy(() => import("person/Person"));

const App: React.FC = () => {
  return (
    <div>
      <Person />     
    </div>
  );
}

export default App;