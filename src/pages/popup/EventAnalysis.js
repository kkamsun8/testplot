import React, { useState } from 'react';
import Plot from 'react-plotly.js';
import { gql, useQuery } from '@apollo/client';
import PRPDGraph from '../../components/PRPDGraph';
import PRPSGraph from '../../components/PRPSGraph';

const PRPD_DATA = gql`
query{
    prpd
}
`;

const makePRPD = (prps) => {
    let prpd = Array.from({ length: 256 }, () => (Array.from({ length: 256 }, () => 0)))
    for (let index = 0; index < prps.length; index++) {
        if (prps[index] !== 0)
            prpd[prps[index]][index % 256]++;
    }
    return prpd;
}


const EventAnalysis = ({ location, time }) => {

    const { loading, error, data } = useQuery(PRPD_DATA);
    const [PRPD, setPRPD] = useState(0);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : </p>;
    let rowData = Buffer.from(data.prpd, "base64")
    let data1 = [];
    // for (let index = 0; index < rowData.length; index++) {
    //     data1.push(rowData.readUInt8(index));
    // }
    data1 = Uint8Array.from(rowData);

    return (
        <>
            <p>PD 이벤트 분석</p>
            <p>개소 : {location}</p>
            <p>발생 시간 : {time}</p>
            <div>
                <div>
                    <div className="flex">
                        <p>PRPD 패턴</p>
                        <label>
                            위상 쉬프트 : &nbsp;
                            <input type="number" min='0' max='360' defaultValue='0' />
                        </label>
                    </div>
                    <PRPDGraph data={makePRPD(data1)} />

                </div>
            </div>
        </>
    )
}
EventAnalysis.defaultProps = {
    location: '345kV_안인-강릉 #2T/L_EBA_A_1B',
    time: new Date().toLocaleString()
}

export default EventAnalysis
