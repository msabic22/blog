import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import UniTable, { fetchUnis, Uni } from '../components/UniTable/UniTable'

export const getStaticProps: GetStaticProps = async () => {
    const unis = await fetchUnis()

    return {
        props: {
            unis: unis,
        },
    }
}

const Ssg: NextPage<{ unis: Uni[] }> = ({ unis }) => {
    return <>{unis && <UniTable unis={unis}></UniTable>}</>
}

export default Ssg
