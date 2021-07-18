import { Button, Col, Container, Row, Form } from 'react-bootstrap';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns'

import background from './assets/backgroundLayer.png';
import logo from './assets/logo.png';
import title from './assets/titleFrame.png'

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

    console.log("CHAMEI COM: " + name + " " + email)

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
    <div className="page-header" style={{ backgroundImage: `url(${background})`}}>
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

        <div className="d-flex pt-5 pb-5 justify-content-center w-100">
          <Button onClick={() => window.scrollTo(0, window.innerHeight + 50)} className="down-button">
            <FiChevronDown color="#ffffff" size={42} className="mx-4" />
          </Button>
        </div>
      </Container>
      
    </div>
    <div className="page-register" style={{ backgroundColor: "#171B23"}}>
      <Container className="register-container py-4" style={{color: '#171B23'}}>
        <Row className='pb-5'>
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

        <div className="d-flex pb-5 justify-content-center w-100">
          <Button onClick={() => window.scrollTo(0, 0)} className="down-button">
            <FiChevronUp color="#ffffff" size={42} className="mx-4" />
          </Button>
        </div>

      </Container>
    </div>
  </div>
  );
}

export default App;
