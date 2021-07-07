import React, { useState } from 'react'


const Footer = () => {
    const [data, setData] = useState(
        [{ "id": 1, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "void": 0, "surface": 0, "corona": 0, "noise": 100 },
        { "id": 2, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "void": 0, "surface": 0, "corona": 0, "noise": 100 },
        { "id": 3, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "void": 0, "surface": 0, "corona": 0, "noise": 100 },
        { "id": 4, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "void": 0, "surface": 0, "corona": 0, "noise": 100 }]
    );

    const [alarmData, setAlarmData] = useState(
        [{ "id": 1, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "alarm": "네트워크 알람", "status": "네트워크 알람 발생" },
        { "id": 2, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "alarm": "네트워크 알람", "status": "네트워크 알람 발생" },
        { "id": 3, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "alarm": "네트워크 알람", "status": "네트워크 알람 발생" },
        { "id": 4, "location": "345kV_안인-강릉 #2T/L_J/B#4_B_2B", "time": "2021-05-13 11:11:00", "alarm": "네트워크 알람", "status": "네트워크 알람 발생" }
        ]);

    const test = (data) => { console.log(data) }

    return (
        <>
            <footer className="text-xs absolute bg-gray-100">
                <div className="flex content-between">
                    <table className="rounded border-solid border-2 m-1 shadow-lg" style={{ width: 800 }}>
                        <tr className="bg-gray-200 text-gray-600 uppercase leading-normal">
                            <th className="text-center">개소 명</th>
                            <th className="text-center">측정 시간</th>
                            <th className="text-center">상태</th>
                        </tr>
                        {data.map((data) => (
                            <>
                                <tr className="hover:bg-gray-200 cursor-pointer" key={data.id} id={data.id} onClick={(e) => console.log(e.target.id)}>
                                    <td className="text-center" id={data.id}>{data.location}</td>
                                    <td className="text-center" id={data.id}>{data.time}</td>
                                    <td className="text-center" id={data.id}>{`보이드(${data.void}%) 계면방전(${data.surface}%) 코로나(${data.corona}) 노이즈(${data.noise}%)`}</td>
                                </tr>
                            </>
                        ))}
                    </table>
                    <table className="rounded border-solid border-2 m-1 shadow-lg ml-5" style={{ width: 1080 }}>
                        <tr className="bg-gray-200 text-gray-600 uppercase leading-normal">
                            <th className="text-center">개소 명</th>
                            <th className="text-center">측정 시간</th>
                            <th className="text-center">알람 타입</th>
                            <th className="text-center" style={{ width: 300 }}>상태</th>
                        </tr>
                        {alarmData.map((data) => (
                            <tr className="hover:bg-gray-200 cursor-pointer" key={data.id}>
                                <td className="text-center">{data.location}</td>
                                <td className="text-center">{data.time}</td>
                                <td className="text-center">{data.alarm}</td>
                                <td className="text-center">{data.status}</td>
                            </tr>
                        ))}
                    </table>
                </div>
            </footer>
        </>
    )
}

export default Footer
