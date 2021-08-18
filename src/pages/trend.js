import React from 'react'
import Select from 'react-select';
import TextField from '@material-ui/core/TextField';
import Plot from 'react-plotly.js';
import { Bar } from 'react-chartjs-2';

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + 1;

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

const phase = [
    { value: '1', label: 'A' },
    { value: '2', label: 'B' },
    { value: '3', label: 'C' }
]

const Trend = () => {
    return (
        <>
            <div className="bg-gray-100 rounded-t" >
                <p className="text-xm font-bold m-2">* 트렌드</p>
                <div className="text-xm font-bold flex justify-around items-center" style={{ height: 795 }}>
                    <div>
                        <div className="flex justify-between mb-1" style={{ width: 300 }}>
                            <p className="text-xm font-bold">검색 설정</p>
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
                                defaultValue={optionsLocation[0]}
                            />
                            <label>상 선택</label>
                            <Select
                                options={phase}
                                defaultValue={phase[0]}
                            />
                            <label>기간</label>
                            <div>
                                <TextField
                                    id="date"
                                    type="date"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </form>
                    </div>
                    <div className="bg-gray-100" style={{ width: 1200 }}>
                        <div className="flex justify-between mb-4">
                            <div className="flex justify-between">
                                <button className="text-white bg-gray-700 hover:bg-gray-900 px-2 py-0.5 rounded  shadow">연간 트렌드</button>
                                <button className="text-white bg-gray-700 hover:900 rounded w-24 h-7 shadow ml-3">월간 트렌드</button>
                                <button className="text-white bg-gray-700 hover:900 rounded w-24 h-7 shadow ml-3">일간 트렌드</button>
                            </div>
                            <button className="text-white bg-gray-700 hover:900 rounded w-32 h-7 shadow">트렌드 보고서</button>
                        </div>
                        {/* <Plot
                            data={[
                                {
                                    x: (() => {
                                        let data = []
                                        for (let index = 1; index < 32; index++) {
                                            data.push(index)
                                        }
                                        return data
                                    })(),
                                    y: (() => {
                                        let data = []
                                        for (let index = 1; index < 32; index++) {
                                            data.push(rand(0, 255))
                                        }
                                        return data
                                    })(),
                                    type: 'bar',
                                }
                            ]}
                            layout={{
                                width: 1200,
                                height: 200,
                                margin: {
                                    l: '40',
                                    r: '40',
                                    b: '40',
                                    t: '40'
                                },
                                title: '이벤트 발생 횟수',
                                yaxis: {
                                    title: '발생 횟수'
                                },
                                xaxis: {
                                    title: '시간'
                                },
                                font: {
                                    family: '맑은고딕, Malgun Gothic, dotum, gulim, sans-serif',
                                    size: 10,
                                    color: '#7f7f7f'
                                }
                            }
                            }
                        />
                        <Plot
                            data={[
                                {
                                    x: (() => {
                                        let data = []
                                        for (let index = 1; index < 32; index++) {
                                            data.push(index)
                                        }
                                        return data
                                    })(),
                                    y: (() => {
                                        let data = []
                                        for (let index = 1; index < 32; index++) {
                                            data.push(rand(0, 255))
                                        }
                                        return data
                                    })(),
                                    type: 'bar',
                                }
                            ]}
                            layout={{
                                width: 1200,
                                height: 200,
                                margin: {
                                    l: '40',
                                    r: '40',
                                    b: '40',
                                    t: '40'
                                },
                                title: '최대 신호 크기',
                                yaxis: {
                                    title: '신호 크기[mV]'
                                },
                                xaxis: {
                                    title: '시간'
                                },
                                font: {
                                    family: '맑은고딕, Malgun Gothic, dotum, gulim, sans-serif',
                                    size: 10,
                                    color: '#7f7f7f'
                                }
                            }
                            }
                        /> */}
                        <Bar
                            data={{
                                labels: Array.from({ length: 31 }, (v, i) => i + 1),
                                datasets: [
                                    {
                                        label: '이벤트 발생 횟수',
                                        backgroundColor: 'rgb(255, 99, 132)',
                                        borderColor: 'rgb(255, 99, 132)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                                        hoverBorderColor: 'rgba(255,99,132,1)',
                                        data: (() => {
                                            let data = []
                                            for (let index = 1; index < 32; index++) {
                                                data.push(rand(0, 255))
                                            }
                                            return data
                                        })()
                                    }
                                ]
                            }}
                            width={100}
                            height={20}
                            options={{
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: '시간'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: '발생횟수'
                                        }
                                    }
                                }
                            }}

                        />

                        <Bar
                            data={{
                                labels: Array.from({ length: 31 }, (v, i) => i + 1),
                                datasets: [
                                    {
                                        label: '최대 신호 크기',
                                        backgroundColor: 'rgb(54, 162, 235)',
                                        borderColor: 'rgb(54, 162, 235)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(54, 162, 235,0.4)',
                                        hoverBorderColor: 'rgba(54, 162, 235,1)',
                                        data: (() => {
                                            let data = []
                                            for (let index = 1; index < 32; index++) {
                                                data.push(rand(0, 255))
                                            }
                                            return data
                                        })()
                                    }
                                ]
                            }}
                            width={100}
                            height={20}
                            options={{
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: '시간'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: '신호 크기[mV]'
                                        }
                                    }
                                }
                            }}
                        />

                        <Bar
                            data={{
                                labels: Array.from({ length: 31 }, (v, i) => i + 1),
                                datasets: [
                                    {
                                        label: '신호 발생 횟수',
                                        backgroundColor: 'rgb(255, 205, 86)',
                                        borderColor: 'rgb(255, 205, 86)',
                                        borderWidth: 1,
                                        hoverBackgroundColor: 'rgba(255, 205, 86,0.4)',
                                        hoverBorderColor: 'rgba(255, 205, 86,1)',
                                        data: (() => {
                                            let data = []
                                            for (let index = 1; index < 32; index++) {
                                                data.push(rand(0, 255))
                                            }
                                            return data
                                        })()
                                    }
                                ]
                            }}
                            width={100}
                            height={20}
                            options={{
                                scales: {
                                    x: {
                                        title: {
                                            display: true,
                                            text: '시간'
                                        }
                                    },
                                    y: {
                                        title: {
                                            display: true,
                                            text: '발생횟수'
                                        }
                                    }
                                }
                            }}

                        />
                    </div>
                </div>
            </div>



        </>
    )
}

export default Trend
