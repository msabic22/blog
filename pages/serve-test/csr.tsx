import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import UniversitiesTable, {
    fetchUninversities,
    University,
} from '../components/UniversityTable/UniversityTable'

const Csr: NextPage = () => {
    const [universities, setUniversities] = useState<University[]>() // U stateu

    useEffect(() => {
        fetchUninversities().then((res) => setUniversities(res))
    }, [])

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

export default Csr
