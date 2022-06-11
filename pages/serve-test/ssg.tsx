import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import UniversitiesTable, {
    fetchUninversities,
    University,
} from '../components/UniversityTable/UniversityTable'

export const getStaticProps: GetStaticProps = async () => {
    const universities = await fetchUninversities()

    return {
        props: {
            universities,
        },
    }
}

const Ssg: NextPage<{ universities: University[] }> = ({ universities }) => {
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

export default Ssg
