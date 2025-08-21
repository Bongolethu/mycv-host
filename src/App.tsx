import React, {  lazy } from "react";
const Person = lazy(() => import("person/Person")); 

const App: React.FC = () => {
  return ( 
    <div>
          <Person />
        </div>        
  );
};

export default App;