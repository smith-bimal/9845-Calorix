/* eslint-disable react/prop-types */
const PopupLayout = ({ children }) => {
    return (
        <div className="fixed w-screen h-screen top-0 left-0 bg-[#00000063] backdrop-blur-sm z-50">
            <div className="p-6 bg-white rounded-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full sm:w-fit max-h-[550px] overflow-auto p-6">{children}</div>
        </div>
    )
}

export default PopupLayout