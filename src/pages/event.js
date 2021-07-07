import React, { useState } from 'react'
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';

const options = [
    { value: '1', label: '안인-강릉 TL1_345kV_D1' },
    { value: '2', label: '안인-강릉 TL1_345kV_D2' },
    { value: '3', label: '안인-강릉 TL2_345kV_D1' },
    { value: '4', label: '안인-강릉 TL2_345kV_D2' },
]

const optionsLocation = [
    { value: '1', label: 'EBG' },
    { value: '2', label: 'JB#1' },
    { value: '3', label: 'JB#2' },
    { value: '4', label: 'EBA' },
]

const optionsAlarm = [
    { value: '1', label: 'ALL' },
    { value: '2', label: '보이드' },
    { value: '3', label: '계면방전' },
    { value: '4', label: '코로나' },
    { value: '5', label: '노이즈' },
]

const Event = () => {
    const [Data, setData] = useState(
        () => {
            let data = []
            for (let index = 0; index < 30; index++) {
                data.push({
                    "id": index,
                    "time": new Date().toLocaleString(),
                    "void": 100,
                    "surface": 0,
                    "corona": 0,
                    "noise": 0
                })
            }
            return data
        }
    );
    return (
        <div className="bg-gray-100 rounded-t" >
            <p className="text-xm font-bold m-2">* 이벤트</p>
            <div className="text-xm font-bold flex justify-around items-center" style={{ height: 795 }}>
                <div>
                    <div className="flex justify-between mb-1" style={{ width: 300 }}>
                        <p className="text-xm font-bold">검색 설정</p>
                        <button className="text-white bg-gray-700 hover:900 rounded w-24 h-7 shadow">갱신</button>
                    </div>
                    <form className="box-border border-2 p-2 shadow rounded" style={{ width: 300 }}>
                        <label>T/L 선택</label>
                        <Select className="text-center"
                            options={options}
                            defaultValue={options[1]}
                        />
                        <label>개소 선택</label>
                        <Select
                            options={optionsLocation}
                        />
                        <label>기간</label>
                        <div>
                            <TextField
                                id="date"
                                type="date"
                                label="From"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="date"
                                type="date"
                                label="To"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </div>
                        <label>방전유형</label>
                        <Select
                            options={optionsAlarm}
                        />
                    </form>
                </div>
                <div className="bg-gray-100" style={{ width: 1000 }}>
                    <div className="flex justify-between">
                        <p className="text-xm font-bold">이벤트 목록</p>
                        <button className="text-white bg-gray-700 hover:900 rounded w-24 h-7 shadow">펄스 분석</button>
                    </div>
                    <div>
                        <table className="rounded border-solid border-2 mt-1 shadow-lg" style={{ width: 1000 }}>
                            <tr className="bg-gray-200 text-gray-600 uppercase leading-normal">
                                <th className="text-center">
                                    <input type="checkbox" />
                                </th>
                                <th className="text-center">발생 시간</th>
                                <th className="text-center">보이드</th>
                                <th className="text-center">계면방전</th>
                                <th className="text-center">코로나</th>
                                <th className="text-center">노이즈</th>
                            </tr>
                            {Data.map((data) => (
                                <tr className="hover:bg-gray-200 cursor-pointer font-normal text-sm" key={data.id}>
                                    <td className="text-center">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="text-center">{data.time}</td>
                                    <td className="text-center">{data.void}</td>
                                    <td className="text-center">{data.surface}</td>
                                    <td className="text-center">{data.corona}</td>
                                    <td className="text-center">{data.noise}</td>
                                </tr>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event
