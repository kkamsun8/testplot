import React, { useState, useEffect, useRef } from 'react'
import Plot from 'react-plotly.js';

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

    const interval = () => {
        timer.current = setInterval(() => {
            setprpd(makeData())
        }, 100)
    };

    useEffect(() => {
        interval()
        return () => {
            setprpd(makeData())
        }
    }, []);

    return (
        <div className="bg-gray-100 rounded-t" >
            <p className="text-xm font-bold m-2">* PRPD</p>
            <p>Te1ss</p>
            <Plot
                data={[
                    {
                        z: prpd,
                        type: 'heatmap',
                        hoverinfo: 'none'
                    }
                ]}
            />
            <div
                onMouseDown={() => clearInterval(timer.current)}
                onMouseUp={() => interval()}
            >
                <Plot
                    data={[
                        {
                            x: [1, 2, 3],
                            type: 'line'
                        }
                    ]}
                />
                <Plot
                    data={[
                        {
                            z: prpd,
                            title: "test",
                            type: 'surface',
                            hoverinfo: 'none',
                            showscale: false
                        }
                    ]}
                    layout={{
                        title: "test",
                        uirevision: true,
                        width: '500',
                        height: '400',
                        margin: {
                            l: '0',
                            r: '0',
                            b: '0',
                            t: '23'
                        },
                        xaxis: {
                            showticklabels: false
                        }

                    }}
                />
            </div>

            <button onClick={() => setprpd(makeData())}>Refresh</button>
        </div>
    )
}

export default Prpd
