import React from 'react'

const Main = ({ title, children }) => {
    return (
        <div className=" inline-block bg-gray-100" style={{ width: 1670, height: 830 }}>
            {children}
        </div>
    )
}

export default Main
