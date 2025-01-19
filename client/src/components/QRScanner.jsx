/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { useNavigate } from "react-router";
import apiRequest from "../lib/apiRequest";

function QRScanner({ setIsScanning }) {
    const [data, setData] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        if (data != "") {
            apiRequest.get(`dishes/${data}`)
                .then(res => {
                    setIsScanning(false);
                    navigate(`/dishes/${res.data._id}`);
                }).catch(e=>{
                    console.log(e);
                })
        }
    }, [data]);

    return (
        <div className="w-[400px] absolute left-1/2 -translate-x-1/2">
            <BarcodeScannerComponent
                width={500}
                height={500}
                onUpdate={(err, result) => {
                    if (result) {
                        setData(result.text);
                    }
                }}
            />
        </div>
    );
}

export default QRScanner;
