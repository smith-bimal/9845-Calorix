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
                    <img className="w-16 h-16 object-cover rounded-full" src="https://media.self.com/photos/57d8952946d0cb351c8c50c9/master/w_1600%2Cc_limit/DELICIOUS-1-POT-Lentil-and-Black-Bean-Chili-Smoky-hearty-PROTEIN-and-fiber-packed-vegan-glutenfree-lentils-chili-healthy-recipe2.jpg" alt="" />
                    <p className="text-nowrap ">{dish.name}</p>
                    <PrimaryBtn onClick={() => navigate(`/dishes/${dish._id}`)}><CircleArrowRight size={20}/></PrimaryBtn>
                </div>
            )}
        </div>
    )
}

export default DropDownCards;