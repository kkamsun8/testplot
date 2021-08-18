import React, { useState, useEffect } from 'react'
import { gql, useQuery } from '@apollo/client';
import PRPDGraph from './PRPDGraph';
import PRPSGraph from './PRPSGraph';

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

const ReadPrpdData = () => {

    const { loading, error, data } = useQuery(PRPD_DATA);
    const [PRPD, setPRPD] = useState(0);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : </p>;
    let rowData = Buffer.from(data.prpd, "base64")
    let data1 = [];
    for (let index = 0; index < rowData.length; index++) {
        data1.push(rowData.readUInt8(index));
    }

    return (
        <>
        
            <PRPDGraph data={makePRPD(data1)} />
            <PRPSGraph data={data1} />
        </>
    )
}

export default ReadPrpdData

