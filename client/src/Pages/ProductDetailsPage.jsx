/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import { useParams } from 'react-router';
import apiRequest from '../lib/apiRequest';
import PrimaryBtn from '../components/PrimaryBtn';
import TernaryBtn from '../components/TernaryBtn';
import QRCode from '../components/QRcode';

const ProductDetails = () => {
  const [dish, setDish] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const [quantities, setQuantities] = useState({});
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    apiRequest
      .get(`/dishes/${id}`)
      .then((response) => {
        setDish(response.data);
        const initialQuantities = response.data.items.reduce((acc, item) => {
          acc[item._id] = item.quantity || 0; // Initialize with default quantities
          return acc;
        }, {});
        setQuantities(initialQuantities);
      })
      .catch((e) => {
        console.error('Error fetching dish:', e);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const calculateCalories = () => {
    if (Array.isArray(dish.items)) {
      return dish.items.reduce((total, item) => {
        const quantity = quantities[item._id] || 0;
        return total + (item.calories || 0) * quantity;
      }, 0);
    }
    return 0;
  };

  if (isLoading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!dish || !Array.isArray(dish.items) || dish.items.length === 0) {
    return <div className="text-center py-8">No dish details available.</div>;
  }

  const handleSavePreference = () => {
    let items = [];
    for (let key of Object.keys(quantities)) {
      items.push({
        name: key,
        quantities: quantities[key],
      });
    }

    apiRequest.post("/user/save-dish?email=golak@mail.com", {
      dish, items
    }).then((res => {
      console.log(res);
    })).catch((e) => {
      console.log(e);
    })
  }

  return (
    <div className="container mx-auto px-4 pt-8">
      {showQR && <QRCode value={dish._id} setShowQR={setShowQR} />}
      <div className="flex items-start lg:flex-row gap-8 relative">
        {/* Left side - Text content */}
        <div className="flex-1">
          <h1 className="text-7xl font-bold mb-4">{dish.name}</h1>
          <p className="text-gray-600 mb-8 w-96 text-sm">
            {dish.description || "No description available for this dish."}
          </p>

          <div className="flex flex-col gap-6 max-h-[350px] overflow-auto mt-16 py-4">
            {dish.items.map((item) => (
              <Counter
                dish={item}
                key={item._id}
                quantities={quantities}
                setQuantities={setQuantities}
              />
            ))}
          </div>

          <div className="flex gap-4 mt-8">
            <PrimaryBtn onclick={handleSavePreference}>Save preference</PrimaryBtn>
            <TernaryBtn onclick={()=>setShowQR(true)}>Generate QR</TernaryBtn>
          </div>
        </div>

        {/* Right side - Image and calories */}
        <div className="flex-1 relative">
          <img
            src={
              dish.image_url ||
              "https://www.contiki.com/six-two/images/width=1180,height=710,crop=1/2024/03/IMG-20240318-WA0007-e1710844435378.jpg"
            }
            alt={dish.name || "Dish Image"}
            className="w-[500px] h-[500px] shadow-[-5px_-5px_25px_5px_#00000038,_inset_1px_0_4px_#0000001a] object-cover rounded-full"
          />
          <h1 className="text-white text-right leading-none">
            <span className="text-[3rem]">Calories</span>
            <br />
            <span className="font-bold text-[7rem]">{calculateCalories()}</span>
            <span className="text-[3rem]">Kcal</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
