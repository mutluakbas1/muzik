import React, {useEffect , useState} from "react";
import axios from 'axios';
import Sarki from "./sarki";
import Menu from "./menu";

const Muzik = ({  }) => {

    const [muzik , setMuzik ] = useState ([]);


    useEffect(() => {

        const fetchData = async() => {
            const {data} = await axios.get('http://localhost:3000/muzikler');
            setMuzik(data);
        
        }

        fetchData();

        return () => {}
    },[]);

    

    

    return(
        <div>
            <Menu />

        {muzik.map((muzik, index) =>
                <Sarki sarkici={muzik.sarkici}
                    sarkiAdi={muzik.sarkiAdi}
                    puan={muzik.sarkiAdi}
                    display={false}
                    link={muzik.link}
                    id={muzik.id}
                    key={index}
                    puanVer={muzik.puanVer} />
                    
            )}
            

        </div>

    )
 };

export default Muzik;