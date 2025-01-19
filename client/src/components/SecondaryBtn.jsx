/* eslint-disable react/prop-types */
const SecondaryBtn = ({ children, onclick }) => {
    return (
        <button className="bg-transparent px-6 py-3 rounded-full shadow-[0_4px_4px_0_#0000001f] text-white hover:bg-[#ffffff2c] duration-75 border-[#ffffffcb] border active:scale-[0.95] outline-none" onClick={onclick}>{children}</button>
    )
}

export default SecondaryBtn