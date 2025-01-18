/* eslint-disable react/prop-types */
const PrimaryBtn = ({ children, onclick }) => {
    return (
        <button className="bg-[#FFDA7E] px-5 py-3 rounded-full shadow-[0_4px_4px_0_#0000001f,_inset_1px_0_4px_#c7a85b89] active:scale-[0.95] duration-75" onClick={onclick}>{children}</button>
    )
}

export default PrimaryBtn