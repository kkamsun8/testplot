import React from 'react'
import Plot from 'react-plotly.js';

const PRPDGraph = ({ data }) => {
    return (
        <Plot
            data={[
                {
                    z: data,
                    type: 'heatmap',
                    hoverinfo: 'none',
                    colorscale: [
                        [0, '#ffffff'],
                        [0.01, '#2f2f2f'],
                        [0.02, '#999999'],
                        [0.1, '#ff5f59'],
                        [0.7, '#ff0000'],
                        [1, '#ffd659']
                    ],
                    colorbar: {
                        thickness: 15
                    },
                    zauto: false,
                    zmax: 80,

                },
                {
                    y: Array.from({ length: 256 }, () => 195),
                    type: 'scatter',
                    mode: 'lines',
                    line: {
                        color: 'rgb(0, 0, 0)',
                        width: 0.5
                    }
                },
                {
                    y: Array.from({ length: 256 }, (v, i) => (Math.sin(3.14 * 2 * i / 255)) * 60 + 195),
                    type: 'scatter',
                    mode: 'lines',
                    line: {
                        color: 'rgb(0, 0, 0)',
                        width: 0.5
                    }
                }
            ]}

            layout={{
                uirevision: true,
                width: '400',
                height: '200',
                margin: {
                    l: '40',
                    r: '0',
                    b: '40',
                    t: '0'
                },
                showlegend: false,
                xaxis: {
                    title: `[Degree]`

                },
                yaxis: {
                    title: "[mV]"
                },
                font: {
                    family: '맑은고딕',
                    size: 10
                }
            }}
        />
    )
}

export default PRPDGraph
