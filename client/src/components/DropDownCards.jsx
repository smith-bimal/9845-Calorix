import { useNavigate } from "react-router";
import PrimaryBtn from "./PrimaryBtn";
import { CircleArrowRight } from "lucide-react";

/* eslint-disable react/prop-types */
const DropDownCards = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div className="absolute p-8 rounded-3xl bg-white max-h-[500px] w-full mt-8 z-20 shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_rgba(0,0,0,0.11)] overflow-auto">
            {data.map((dish) =>
                <div key={dish._id} className="flex items-center mb-4 cursor-pointer gap-8 border-b pb-2" onClick={() => navigate(`/dishes/${dish._id}`)}>
                    <img className="w-16 h-16 object-cover rounded-full" src={dish.image_url} alt={dish.name} />
                    <p className="text-nowrap ">{dish.name}</p>
                    <PrimaryBtn onClick={() => navigate(`/dishes/${dish._id}`)}><CircleArrowRight size={20} /></PrimaryBtn>
                </div>
            )}
        </div>
    )
}

export default DropDownCards;