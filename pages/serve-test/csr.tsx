import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import UniTable, { fetchUnis, Uni } from '../components/UniTable/UniTable'

const Csr: NextPage = () => {
    const [unis, setUnis] = useState<Uni[]>()
    useEffect(() => {
        fetchUnis().then((res) => setUnis(res))
    }, [])

    return <>{unis && <UniTable unis={unis}></UniTable>}</>
}

export default Csr
