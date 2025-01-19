/* eslint-disable react/prop-types */
import PopupLayout from "./PopupLayout"
import QRCode from "react-qr-code";
import { X } from "lucide-react"

const QRcode = ({ value, setShowQR }) => {
    return (
        <PopupLayout>
            <div className="px-6 pt-10 pb-2 relative">
                <QRCode value={value} />
                <div className="p-1 bg-red-500 rounded-full text-white w-fit m-auto mt-8 cursor-pointer" onClick={() => setShowQR(false)}>
                    <X />
                </div>
            </div>
        </PopupLayout>
    )
}

export default QRcode