import React from 'react'
import { NextPage } from 'next'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'next/image'

const images = [
    'https://makarska-info.hr/phpthumb/phpThumb.php?w=1920&h=1080&zc=1&aoe=1&src=/clients/1/headers/5niuhoz7dfg7m86.jpg',
    'https://i.ytimg.com/vi/-WbNU0PPHXU/maxresdefault.jpg',
    'https://makarska-info.hr/phpthumb/phpThumb.php?w=1920&h=1080&zc=1&aoe=1&src=/clients/1/headers/5niueljxx1g4vqz.jpg',
]

const Ssr: NextPage = () => {
    return (
        <Container>
            <Row>
                <Col>
                    {images.map((i) => (
                        <Image
                            key={i}
                            src={i}
                            alt={i}
                            width={1920}
                            height={1080}
                        ></Image>
                    ))}
                </Col>
            </Row>
        </Container>
    )
}

export default Ssr
