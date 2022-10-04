import React from "react";
import Muzik from "./muzik";



const App = ({ pageName }) => {

    const pageToShow = () => {
    
        if (pageName === 'muzik') return <Muzik />;
        
       
      
      

        return <div>Not Found</div>;
    };

    return (
        <div>

            {pageToShow()}

        </div>
    )

};

export default App;

