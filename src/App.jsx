import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CardComponent from './components/CardComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import GTR from './pages/GrandTurismo.jsx';
import StreetRace from './pages/StreetRace.jsx'
import Luxury from './pages/Luxury.jsx'
import Error from './pages/Error.jsx'

function App() {


  return (
    <>
      

      <Router>
      <Routes>
        <Route path="/" element={<GTR/>}/>
        <Route path="/streetrace" element={<StreetRace/>}/>
        <Route path="/luxury" element={<Luxury/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      </Router>

      {/*  1 ROW 5 COLUMN CardComponentS  */}
  
      {/* <Container>

    
        <Row className='g-4  mb-4 d-flex justify-content-center'>
        <Col xs={12} sm={6} md={2}>
          <CardComponent
          model='Ford Mustang'
          image={Mustang}
          description='America’s ultimate muscle car, featuring a supercharged 5.2L V8 producing 760 hp.'
          speed={180}
          buttonText='Learn More'
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Nissan GT-R'
           image={Nissan}
           description='Known as "Godzilla," this supercar packs a 3.8L twin-turbo V6 with 600 hp.'
           speed={205}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Ferrari'
           image={Ferrari}
           description='America’s ultimate muscle car, featuring a supercharged 5.2L V8 producing 760 hp.'
           speed={211}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Mclaren'
           image={Mclaren}
           description='The McLaren 765LT is a track-focused supercar with a 4.0L twin-turbo V8 producing 755 hp.'
           speed={212}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Lamborghini'
           image={Lambo}
           description='The Lamborghini Aventador SVJ is a V12-powered supercar with 759 hp.'
           speed={221}
           buttonText='Learn More'
          
          />
          </Col>


        </Row>

    
        <Row className='g-4 d-flex justify-content-center'>

        <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Porsche'
           image={Porsche}
           description='The Porsche 911 Turbo S is a 640 hp supercar with a 3.8L twin-turbo flat-six'
           speed={193}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Bugatti'
           image={Bugatti}
           description='The Bugatti Chiron Super Sport is a 1,578 hp hypercar with an 8.0L quad-turbo W16.'
           speed={304}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Aston Martin'
           image={Aston}
           description='The Aston Martin DBS Superleggera is a 715 hp grand tourer with a 5.2L twin-turbo V12.'
           speed={205}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Koegnisegg'
           image={Koenisegg}
           description='The Koenigsegg Jesko Absolut is a 1,600 hp hypercar with a 5.0L twin-turbo V8.'
           speed={310}
           buttonText='Learn More'
          
          />
          </Col>
          <Col xs={12} sm={6} md={2}>
          <CardComponent
           model='Tuatara'
           image={Tuatara}
           description='The SSC Tuatara is a 1,750 hp hypercar with a 5.9L twin-turbo V8.'
           speed={282}
           buttonText='Learn More'
          
          />
          </Col>



        </Row>

      </Container> */}

    </>
  )
}

export default App
