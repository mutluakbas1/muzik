import { useEffect, useState } from "react";

import Menu from "./menu";

import axios from 'axios';

const PuanEkleme = ({ }) => {

    const [sarkici, setSarkici] = useState('0');
    const [sarkiAdi, setSarkiAdi] = useState('0');
    const [puan, setPuan] = useState('0');




    const [displayResult, setDisplayResult] = useState(true);

    
    

    return (
        <div>
            <Menu />
            {(displayResult) ?
                <div >
                    <div className="col-sm-4">

                        <label>Sarkici: </label>
                        <input className="form-control" type={'text'}
                            onChange={(e) => {
                                setSarkici(e.target.value);
                            }} />
                    </div>

                    <div className="col-sm-4">
                        <label>Sarki Adi: </label>
                        <input className="form-control" type={'text'}
                            onChange={(e) => {
                                setSarkiAdi(e.target.value);
                            }} />
                    </div>





                   
                </div>
                : <div>Start up added successfully</div>}


        </div>
    )
};

export default PuanEkleme;