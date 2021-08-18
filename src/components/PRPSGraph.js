import React, { useState, useEffect, useRef } from 'react'
import Plot from 'react-plotly.js';

const PRPSGraph = ({ data }) => {
    const count = useRef(0)
    const timer = useRef(null)


    const makePrps = (data, count) => {
        let prps = [];

        for (let index = 0; index < 200; index++) {
            prps.push(data.slice((index + count) * 256, (index + count) * 256 + 256))
        }

        return prps
    }

    const [prps, setPrps] = useState(makePrps(data, count.current));

    const interval = () => {
        timer.current = setInterval(() => {
            if (count.current == 3400)
                count.current = 0;
            else
                count.current = count.current + 25
            setPrps(makePrps(data, count.current))
        }, 250)
    };

    useEffect(() => {
        interval()
        return (
            clearInterval(timer.current)
        )
    }, []);

    const setCount = () => {
        ++count.current
        console.log(count.current)
    }



    return (
        <>
            <div onMouseDown={() => clearInterval(timer.current)}
                onMouseUp={() => interval()}>
                <Plot
                    data={[
                        {
                            z: prps,
                            title: "test",
                            type: 'surface',
                            hoverinfo: 'none',
                            showscale: false,
                            colorscale: "Earth"
                        }
                    ]}
                    layout={{
                        uirevision: true,
                        width: '300',
                        height: '200',
                        margin: {
                            l: '0',
                            r: '0',
                            b: '0',
                            t: '0'
                        },
                        xaxis: {
                            showticklabels: false
                        },
                        scene: {
                            aspectmode: "manual",
                            zaxis: {
                                range: [0, 255]
                            }
                        }
                    }}
                />
            </div>
            <button onClick={setCount}>{count.current}</button>
        </>
    )
}

export default PRPSGraph
