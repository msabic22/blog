import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import Image from 'next/image'
import axios from 'axios'

export const UNI_ENDPOINT = 'http://universities.hipolabs.com/search'
export const UNI_SEARCH_TERM = 'science'
export interface Uni {
    web_page: string
    country: string
    domains: string[]
    name: string
    alpha_two_code: string
}
interface Props {
    unis: Uni[]
}

export const fetchUnis = async (): Promise<Uni[]> => {
    return await (
        await axios.get<Uni[]>(UNI_ENDPOINT, {
            params: { name: UNI_SEARCH_TERM },
        })
    ).data
}

const UniTable: React.FC<Props> = ({ unis }) => {
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
                            {unis &&
                                unis.map((u, i) => (
                                    <tr key={i}>
                                        <td>{i + 1}</td>
                                        <td>{u.name}</td>
                                        <td>{u.domains[0]}</td>
                                        <td>
                                            <Image
                                                src={`https://countryflagsapi.com/png/${u.alpha_two_code}`}
                                                alt={u.country}
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

export default UniTable
