import React, { useState, useEffect, useRef } from 'react'
import Plot from 'react-plotly.js';
// import { prpdData } from '../data/data';
import PRPDGraph from '../components/PRPDGraph';
import ReadPrpdData from '../components/ReadPrpdData';


const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + 1;

const makeData = () => {
    let prpdData = [];

    for (let index = 0; index < 30; index++) {
        let row = [];
        for (let j = 0; j < 256; j++) {
            row.push(rand(0, 255));
        }
        prpdData.push(row);
    }

    return prpdData;
}


const Prpd = () => {
    const [prpd, setprpd] = useState(makeData());
    const timer = useRef(null);

    // const interval = () => {
    //     timer.current = setInterval(() => {
    //         setprpd(makeData())
    //     }, 250)
    // };

    // useEffect(() => {
    //     interval()
    //     console.log(prpdData);
    //     return () => {
    //         setprpd(makeData())
    //     }
    // }, []);


    return (
        <div className="bg-gray-100 rounded-t" style={{ width: '100%', height: '100%' }} >
            <div className="bg-green-700" style={{ width: 1200, height: 800 }}>
                <p className="font-bold text-lg">PD 이벤트 분석</p>
                <p className="text-lg"> 개소 : 345kV_안인-강릉 #2T/L_EBA_A_1B</p>
                <p className="text-lg">발생 시간 : {new Date().toLocaleString()}</p>
                <div className="flex" style={{ width: '100%', height: 770 }}>
                    <div>
                        <div className="flex items-center">
                            <p className="text-lg">PRPD 패턴</p>
                            <label>위상 쉬프트 : </label><input type="number" />
                            <button className="">설정치 적용</button>
                        </div>
                        <PRPDGraph></PRPDGraph>
                    </div>
                    <div>
                        <div>
                            <p className="text-lg">PRPS 패턴</p>
                        </div>
                    </div>
                </div>
                <ReadPrpdData></ReadPrpdData>
                {/* <Plot
                data={[
                    {
                        z: prpd,
                        type: 'heatmap',
                        hoverinfo: 'none'
                    }
                ]}
            /> */}
            </div>
        </div>
    )
}

export default Prpd
