import { Header, Home, Footer, About, Education, Experience, Services} from '../sections'
import { Row, Col, Container } from 'react-bootstrap'
import ScrollTopArrow from '../components/Scroller'

import 'bootstrap/dist/css/bootstrap.min.css'
import { GlobalStyle } from "../styles/globals"

import '../components/Icons'
import SEO from './SEO'



function App() {
    return (
        <>
            <GlobalStyle />   
            <SEO
                title='Carlos Essteves '
                description='Projeto de CARLOS ESTEVES'
                name='Carlos Esteves.'
                type='article' 
            />         
            <Header />
            <main>
                <Home />
                <About />
                <Container>
                    <Row>
                        <Col md={6}>
                            <Education />
                        </Col>
                        <Col md={6}>
                            <Experience />
                        </Col>
                    </Row>
                </Container>
                <Services /> 
            </main>
            <Footer />
            <ScrollTopArrow />
        </>
    )
}

export default App
