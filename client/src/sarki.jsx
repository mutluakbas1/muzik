import React from "react";

const Sarki = ({ display, sarkici, sarkiAdi, puan

}) => {

    const puanVer = () => {

        axios.post('http://localhost:3000/add-puan', {
            sarkici: sarkici,
            sarkiAdi: sarkiAdi,
            puan: puan,




        })
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


