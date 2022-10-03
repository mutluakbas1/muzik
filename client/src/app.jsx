import React from "react";
import AddPuan from "./addPuan";
import Muzik from "./muzik";



const App = ({ pageName }) => {

    const pageToShow = () => {
    
        if (pageName === 'muzik') return <Muzik />;
        if (pageName === 'addPuan') return <AddPuan />;
       
      
      

        return <div>Not Found</div>;
    };

    return (
        <div>

            {pageToShow()}

        </div>
    )

};

export default App;

