/* eslint-disable react/prop-types */
const Counter = ({ dish, quantities, setQuantities }) => {
    const handleDecrease = () => {
        if (quantities[dish._id] > 0) {
            setQuantities((prev) => ({
                ...prev,
                [dish._id]: prev[dish._id] - 1,
            }));
        }
    };

    const handleIncrease = () => {
        setQuantities((prev) => ({
            ...prev,
            [dish._id]: (prev[dish._id] || 0) + 1,
        }));
    };

    return (
        <div className="w-fit flex items-center gap-6">
            <div className="flex items-baseline">
                <h3 className="text-3xl font-semibold">{dish.name.name}</h3>
                <p>&nbsp;({dish.calories} Kcal)</p>
            </div>

            <div className="bg-white px-6 py-2 w-40 rounded-full shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_#0000001a] flex items-center justify-between text-2xl">
                <button onClick={handleDecrease} className="outline-none">-</button>
                <p>{quantities[dish._id] || 0}</p>
                <button onClick={handleIncrease} className="outline-none">+</button>
            </div>
        </div>
    );
};

export default Counter;
