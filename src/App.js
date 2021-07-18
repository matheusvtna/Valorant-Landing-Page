import { Button, Col, Container, Row, Form, Spinner } from 'react-bootstrap';
import { FiMenu, FiChevronDown } from 'react-icons/fi';
import { Link, Router } from 'react-router-dom';

import background from './assets/backgroundLayer.png';
import logo from './assets/logo.png';
import title from './assets/titleFrame.png'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const blackFriday = new Date(2021, 11, 27, 0, 0, 0, 0);
  var now = new Date()

  return (
  <div className="root-page">
    <div className="page-header" style={{ backgroundImage: `url(${background})`}}>
      <Container className="flex header-container items-center">
        <Row className="d-flex py-5 pb-4 justify-content-between w-100 align-center">
          <img src={logo} className="logo align-center" />
          <a href='https://playvalorant.com/pt-br/' target="_blank"> 
            <Button className="play-button">
            JOGUE AGORA
            </Button>   
          </a>
        </Row>

        <Row className="d-flex py-5 align-content">
            <img src={title} className="w-100"/>
            <h1 className='w-100 text-center p3-4 xs-1' style={{color: '#FFFFFF'}}> 
              Se prepare para as novas ofertas!
            </h1>          
        </Row>

        <div className="d-flex py-5 justify-content-center w-100">
          <Button onClick={() => window.scrollTo(0, window.innerHeight)} className="down-button">
            <FiChevronDown color="#ffffff" size={42} className="mx-4" />
          </Button>
        </div>

      </Container>
      
    </div>
    <div className="page-register" style={{ backgroundColor: "#171B23"}}>
      <Container className="register-container" style={{color: '#171B23'}}>
        <Row>
          <h3 className="pt-5 w-100 title text-center">
            Estamos contando os dias para as novas skins!
          </h3>
        </Row>
        
        <Row>
          <Col className='p-5 date-box'>
            
          </Col>
        </Row>

        <Row>
          <h4 className="pt-3 pb-1 w-100 text-center" style={{color: 'white'}}>
            Quer ser o primeiro a saber? Cadastre-se!
          </h4>
        </Row>
        
        <Col className='d-flex justify-content-center align-items-center'>
          <Form className='d-flex flex-column justify-content-center align-items-center'>
            <Form.Control type="name" placeholder="Nome" className="mt-4 register-input" />
            <Form.Control type="email" placeholder="E-mail" className="mt-4 register-input"/>
            <Button type="submit" className="mt-4 down-button">
              ESTOU NESSA
            </Button>          
          </Form>
        </Col>
      </Container>
    </div>
  </div>
  );
}

export default App;
