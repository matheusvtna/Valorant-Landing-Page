import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { FiChevronDown, FiChevronUp, FiMapPin, FiPhone, FiMail } from 'react-icons/fi';
import { FiTwitter, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

import background from './assets/backgroundLayer.png';
import backgroundClean from './assets/backgroundSquares.png';
import logo from './assets/logo.png';
import title from './assets/titleFrame.png'
import agents from './assets/newAgents.png'
import skins from './assets/skins.jpg'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  
  useEffect(() => {
    setInterval(() => {
      // last November Friday
      const blackFriday = new Date(2021, 10, 27, 0, 0, 0, 0);
      let currentMoment = new Date()

      let daysCount = differenceInDays(blackFriday, currentMoment);
      let hoursCount = differenceInHours(blackFriday, currentMoment);
      let minutesCount = differenceInMinutes(blackFriday, currentMoment);
      let secondsCount = differenceInSeconds(blackFriday, currentMoment);
      setDays(daysCount);
      setHours(hoursCount);
      setMinutes(minutesCount);
      setSeconds(secondsCount);
    }, 1000)  
  }, [])

  function saveUser() {
    
    let users = JSON.parse(localStorage.getItem('users') || "[]")

    if(name === "" || email === "") {
      alert("Você precisa inserir nome e email para se cadastrar!")
      return
    }

    if(users.find(user => user.email === email)){
      alert("Este email já foi cadastrado anteriormente.")
      return
    }
    
    localStorage.setItem('users', JSON.stringify([...users, {name, email}]));
    alert("Parabéns, " + name + "! Agora você está cadastrado em nosso mercado de skins.")
    setName("")
    setEmail("")
  }

  return (
  <div className="root-page">
    <div className="page-header" style={{ backgroundImage: `url(${background})`, backgroundColor: '#0E1921'}}>
      <Container className="flex header-container items-center">
        <Row className="d-flex py-5 pb-4 justify-content-between w-100 align-center">
          <img src={logo} className="logo align-center mx-5" />
          <a href='https://playvalorant.com/pt-br/' target="_blank"> 
            <Button className="play-button">
            JOGUE AGORA
            </Button>   
          </a>
        </Row>

        <Row className="d-flex py-5 align-content">
            <img src={title} className="w-100"/>
            <h1 className='w-100 text-center p3-4 xs-1' style={{color: '#FFFFFF'}}> 
              Prepare-se para as novas ofertas!
            </h1>          
        </Row>

        <div className="d-flex pt-5 pb-4 justify-content-center w-100">
          <a href='#register' >
            <Button className="down-button">
              <FiChevronDown color="#ffffff" size={42} className="mx-4" />
            </Button>
          </a>
        </div>
      </Container>
      
    </div>
    <div id="register" className="page-register" style={{ backgroundImage: `url(${backgroundClean})`}}>
      <Container className="register-container py-4" style={{color: '#0E1921'}}>
        <Row className='pb-5 pt-5'>
          <h3 className="pt-5 w-100 title text-center">
            Estamos contando os dias para as novas skins!
          </h3>
        </Row>
        
        <div className='d-flex justify-content-center'>
          <Row className='d-flex w-100 pt-3 justify-content-center'>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <div className='date-box mb-5'>
                <h1 className='text-center title py-1'>
                  {
                    String(parseInt(days)).padStart(2, "0")
                  }
                </h1>
                <h3 className='text-center title py-1'>
                  {
                    days > 1 ? "DIAS" : "DIA"
                  }            
                </h3>
              </div>
              
            </Col>
            <Col  xl={3} lg={3} md={6} sm={6} xs={6}>
              <div className='date-box mb-5'>
                <h1 className='text-center title py-1'>
                  {
                    String(parseInt(hours) % 24).padStart(2, "0") 
                  }
                </h1>
                <h3 className='text-center title py-1'>
                  {
                    parseInt(hours) % 24 > 1 ? "HORAS" : "HORA"
                  }
                </h3>
              </div>
            </Col>
            <Col  xl={3} lg={3} md={6} sm={6} xs={6}>
              <div className='date-box mb-5'>
                <h1 className='text-center title py-1'>
                  {
                    String(parseInt(minutes) % 60).padStart(2, "0") 
                  }
                </h1>
                <h3 className='text-center title py-1'>
                  {
                    parseInt(minutes) > 1 ? "MINUTOS" : "MINUTO"
                  }
                </h3>
              </div>
            </Col>
            <Col xl={3} lg={3} md={6} sm={6} xs={6}>
              <div className='date-box mb-5'>
                <h1 className='text-center title py-1'>
                  {
                    String(parseInt(seconds) % 60).padStart(2, "0") 
                  }
                </h1>
                <h3 className='text-center title py-1'>
                  {
                    parseInt(seconds) > 1 ? "SEGUNDOS" : "SEGUNDO"
                  }
                </h3>
              </div>
            </Col>
          </Row>
        </div>

        <Row>
          <h4 className="pt-4 pb-2 w-100 text-center" style={{color: 'white'}}>
            Quer ser o primeiro a saber? Cadastre-se!
          </h4>
        </Row>
        
        <Col className='d-flex justify-content-center align-items-center pb-3'>
          <Form className='d-flex flex-column justify-content-center align-items-center pb-5'>
            <Form.Control type="name" placeholder="Nome" className="mt-4 register-input" value={name} onChange={e => setName(e.target.value)}/>
            <Form.Control type="email" placeholder="E-mail" className="mt-4 register-input" value={email} onChange={e => setEmail(e.target.value)}/>
            <Button className="mt-4 down-button" onClick={() => saveUser()}>
              ESTOU NESSA
            </Button>          
          </Form>
        </Col>
{/* 
      </Container>
      <div className="page-header" style={{ backgroundImage: `url(${backgroundClean})`}}> */}
        {/* <Container> */}
        <Row className='pb-3'>
            <h1 className="pt-5 w-100 title text-center">
              O que vem por aí...
            </h1>
          </Row>

          <Row className="page-row py-5">
            <Col xs="12" md="6" className="pr-5">
              <h1 className="text-white mb-3 font-weight-bold">Novas skins para agentes</h1>
              <p className="lead text-white">Mais do que armas e munição, VALORANT inclui agentes com habilidades adaptativas, rápidas e letais, que criam oportunidades para você exibir sua mecânica de tiro. Cada Agente é único, assim como os momentos de destaque de cada partida! </p>
            </Col>
            <Col xs="12" md="6">
              <img className="image-row pl-5 w-100 image" src={agents}/>
            </Col>
          </Row>

          <Row className="page-row py-5">
            <Col xs="12" md="6">
              <img className="image-row pr-5 w-100 image" src={skins} />
            </Col>
            <Col xs="12" md="6" className="pl-5">
              <h1 className="text-white mb-3 font-weight-bold">Novas skins de armas</h1>
              <p className="lead text-white">Mostre suas habilidades e mostre que tem mira. As novas skins do Valorant sentirão prazer em serem usadas por mãos tão habilidosas. Escolha a sua melhor arma e destrua na partida! </p>
            </Col>
          </Row>
        </Container>
      {/* </div> */}
    </div>

    <div className="d-flex valorant-logo justify-content-center" style={{backgroundColor: '#FC4854'}}>
      <Row className='d-flex justify-content-center align-items-start py-5'>
        <Col className='d-flex justify-content-end'> 
          <img src={logo} className="logo align-center" />
        </Col>
        <Col className='d-flex justify-content-start'>
          <h1 className='pt-2 title'>
            Valorant
          </h1>
        </Col>
      </Row>
    </div>

    <div className='py-5' style={{backgroundColor: '#0E1921'}}>
      <Container>
        <Row className='d-flex justify-content-around'>
          <Col id='info' className='pr-5 justify-content-around'>
            <Row className='align-items-center'>
              <FiMapPin color="#FC4854" size={15} className="mr-4"/>
              <p className='text-white pt-3'> Av. Abecê - Centro, Recife - PE, Brasil</p>
            </Row>
            <Row className='align-items-center'>
              <FiPhone color="#FC4854" size={15} className="mr-4"/>
              <p className='text-white pt-3'> (81) 9xxxx-xxxx</p>
            </Row>
            <Row className='align-items-center'>
              <FiMail color="#FC4854" size={15} className="mr-4"/>
              <p className='text-white pt-3'> matheusxxxx@xxxx.com</p>
            </Row>           
          </Col>
          <Col id='social' className='justify-content-center'>
            <Row className='py-3 justify-content-center'>
              <a href='https://github.com/matheusvtna/' target="_blank"> 
                <FiGithub color="#FC4854" size={25} className="mr-4"/>
              </a>
              <a href='https://www.linkedin.com/in/matheusvtnandrade/' target="_blank"> 
                <FiLinkedin color="#FC4854" size={25}/>
              </a>
            </Row>
            <Row className='py-3 justify-content-center'>
              <a href='https://www.instagram.com/matheusvtna/' target="_blank"> 
                <FiInstagram color="#FC4854" size={25} className="mr-4"/>
              </a>
              <a href='https://twitter.com/matheusvtna' target="_blank"> 
                <FiTwitter color="#FC4854" size={25}/>
              </a>
            </Row>
          </Col>
          <Col id='back' className='d-flex justify-content-end align-items-start'>
            <Button onClick={() => window.scrollTo(0, 0)} className="down-button">
              <FiChevronUp color="#ffffff" size={42} className="mx-4" />
            </Button>
          </Col>
        </Row>

        <div>
          <p className='pt-5' style={{color: 'white'}}> Esta aplicação foi desenvolvido por Matheus Andrade para o Desafio 1 do Programa Hiring Coders promovido pela VTEX em parceira com a Gama Academy.</p>
        </div>
      </Container>
    </div>

  </div>
  );
}

export default App;
