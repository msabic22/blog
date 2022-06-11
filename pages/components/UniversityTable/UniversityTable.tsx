import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Image from 'next/image'
import axios from 'axios'

export const UNIVERSITIES_API = 'http://universities.hipolabs.com/search'
export const SEARCH_PARAMETER = 'science'

export interface University {
    name: string // Ime fakulteta
    web_page: string[] // Lista web stranica fakulteta
    domains: string[] // Lista domena koje posjeduje fakultet
    country: string // Država u kojoj se fakultet nalazi
    alpha_two_code: string // Skračenica imena države sastavljena od dva slova
}

interface Props {
    universities: University[]
}

export const fetchUninversities = async (): Promise<University[]> => {
    return await (
        await axios.get<University[]>(UNIVERSITIES_API, {
            params: { name: SEARCH_PARAMETER },
        })
    ).data
}

const UniversitiesTable: React.FC<Props> = ({ universities }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Domain</th>
                                <th>Country</th>
                            </tr>
                        </thead>
                        <tbody>
                            {universities &&
                                universities.map((university, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{university.name}</td>
                                        <td>{university.domains[0]}</td>
                                        <td>
                                            <Image
                                                src={`https://countryflagsapi.com/png/${university.alpha_two_code}`}
                                                alt={university.country}
                                                height={40}
                                                width={60}
                                            ></Image>
                                        </td>
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default UniversitiesTable
