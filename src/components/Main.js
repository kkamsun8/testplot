import React from 'react'

const Main = ({ title, children }) => {
    return (
        <div className=" inline-block bg-gray-100" style={{ width: 1650, height: 833 }}>
            {children}
        </div>
    )
}

export default Main
