/* eslint-disable react/prop-types */
const TernaryBtn = ({ children, onclick }) => {
    return (
        <button className="bg-transparent px-6 py-3 rounded-full shadow-[0_4px_4px_0_#0000001f] text-Black hover:bg-[#5353532c] duration-75 border-[#000000cb] border active:scale-[0.95] outline-none" onClick={onclick}>{children}</button>
    )
}

export default TernaryBtn