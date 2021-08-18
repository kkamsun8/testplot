import React from 'react'

const alarm = "bg-red-600 rounded-full text-white font-bold absouleted shadows";
const alarmSize = { width: 30, height: 30 };

const Realtime = () => {
    return (
        <div className="bg-gray-100 rounded-t" style={{ height: 800 }}>
            <p className="text-lg font-bold m-2">* 실시간</p>
            <button className={alarm} style={alarmSize}>A</button>
        </div>

    )
}

export default Realtime
