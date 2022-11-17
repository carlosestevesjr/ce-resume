import React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-bootstrap'
import { Skill, Counter, Section } from '../components'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'
import about from '../data/about.json'
import PerfilImage from "../assets/images/perfil.png"

const Name = styled.div`
  font-weight: 500;
  font-size: 18px;
`
export class About extends React.Component {
    render() {
        return (
            <Section id="about" title="Sobre">
                <Row>
                    <Col md={2}>
                        <Row>
                            <Col md={12}>
                                <div className="text-center mb-3">
                                    <img src={PerfilImage} alt="kiendang" style={{ width: '150px' }} /> 
                                </div>
                            </Col>
                            <Col md={12}>
                                <Name className="text-center mb-3">
                                    {about.username}
                                </Name>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={10} className="triangle-left-md triangle-top-sm">
                        <div className="rounded bg-white shadow-dark padding-30 mb-5">
                            <Row>
                                <Col md={12}>
                                    <div dangerouslySetInnerHTML={{ __html: about.objective }} />
                                    <div className="mt-3 mb-3">
                                        
                                        <a href="https://api.whatsapp.com/send?phone=5541987067490&text=Oiii!%20!!%20Estou%20entrando%20em%20contato%20com%20você%20através%20do%20seu%20site" className="btn btn-success m-2" target="_blank" rel="noopener noreferrer">
                                            <svg style={{ width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.89 7 8.5 7 9.71C7 10.93 7.89 12.1 8 12.27C8.14 12.44 9.76 14.94 12.25 16C12.84 16.27 13.3 16.42 13.66 16.53C14.25 16.72 14.79 16.69 15.22 16.63C15.7 16.56 16.68 16.03 16.89 15.45C17.1 14.87 17.1 14.38 17.04 14.27C16.97 14.17 16.81 14.11 16.56 14C16.31 13.86 15.09 13.26 14.87 13.18C14.64 13.1 14.5 13.06 14.31 13.3C14.15 13.55 13.67 14.11 13.53 14.27C13.38 14.44 13.24 14.46 13 14.34C12.74 14.21 11.94 13.95 11 13.11C10.26 12.45 9.77 11.64 9.62 11.39C9.5 11.15 9.61 11 9.73 10.89C9.84 10.78 10 10.6 10.1 10.45C10.23 10.31 10.27 10.2 10.35 10.04C10.43 9.87 10.39 9.73 10.33 9.61C10.27 9.5 9.77 8.26 9.56 7.77C9.36 7.29 9.16 7.35 9 7.34C8.86 7.34 8.7 7.33 8.53 7.33Z" />
                                            </svg>
                                            <span className='p-2'>(41) 988286073</span> 
                                        </a>

                                        <a href="https://github.com/carlosestevesjr" className="btn btn-primary m-2" target="_blank" rel="noopener noreferrer">
                                            <svg  style={{ width: '24px', height: '24px'}}  viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
                                            </svg>
                                            <span className='p-2'>Linkedin</span> 
                                        </a>

                                        <a href="https://github.com/carlosestevesjr" className="btn btn-warning m-2" target="_blank" rel="noopener noreferrer">
                                            <svg style={{ width: '24px', height: '24px'}} viewBox="0 0 24 24">
                                                <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
                                            </svg>
                                            <span className='p-2'>Github</span> 
                                        </a>

                                        {/* <a href="https://github.com/kien-dang/react-resume-template" className="btn btn-kd m-2" target="_blank" rel="noopener noreferrer">View on Github</a>
                                        <a href="https://github.com/kien-dang/react-resume-template" className="btn btn-kd m-2" target="_blank" rel="noopener noreferrer">View on Github</a> */}

                                    </div>
                                </Col>
                            </Row>
                        </div>
                        
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <div className="rounded bg-white shadow-dark padding-30">
                            <Row>
                                {about.skills.map((skill, i:number) => (
                                    <Skill key={i} title={skill.name} percent={skill.confidence} backgroundColor={skill.color} />
                                ))}
                            </Row>
                        </div>
                    </Col>
                </Row>
              
            </Section>
        )
    }
}

export default About
