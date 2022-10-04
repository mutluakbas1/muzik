import React from "react";
import axios from 'axios';

const Sarki = ({ display, sarkici, sarkiAdi, puan}) => {

    const besPuan = 5;
    const [puanEkle, setPuanEkle] =useState(0);



    const puanVer = () => {

        axios.post('http://localhost:3000/muzikler/:id', {
            sarkici: sarkici,
            sarkiAdi: sarkiAdi,
            puan: puan,

        }).then(axios.spread((data1,) => {
            setPuanEkle(data1.data.puan);
        
        }))
            .then(function (response) {
                console.log(response);
                setDisplayResult(false);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

   

    return (
        <div className="div-bottom-border">

            {(display) ? <Menu /> : <></>}


            <div className="row">

                <div className="col-sm-2">



                    <p>Sarkici: {sarkici}</p>
                    <p>Sarki Adi: {sarkiAdi}</p>

                    <div className="col-sm-4">
                        <button onClick={puanVer}>Puan Ver</button>
                    </div>

                </div>







            </div>
        </div>

    )
};


export default Sarki;


