import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import UniversitiesTable, {
    fetchUninversities,
    University,
} from '../components/UniversityTable/UniversityTable'

export const getServerSideProps: GetServerSideProps = async () => {
    const universities = await fetchUninversities()

    return {
        props: {
            universities,
        },
    }
}

const Ssr: NextPage<{ universities: University[] }> = ({ universities }) => {
    return (
        <>
            {universities && (
                <UniversitiesTable
                    universities={universities}
                ></UniversitiesTable>
            )}
        </>
    )
}

export default Ssr
