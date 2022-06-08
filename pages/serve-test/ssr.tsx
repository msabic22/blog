import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import UniTable, { fetchUnis, Uni } from '../components/UniTable/UniTable'

export const getServerSideProps: GetServerSideProps = async () => {
    const unis = await fetchUnis()

    return {
        props: {
            unis: unis,
        },
    }
}

const Ssr: NextPage<{ unis: Uni[] }> = ({ unis }) => {
    return <>{unis && <UniTable unis={unis}></UniTable>}</>
}

export default Ssr
