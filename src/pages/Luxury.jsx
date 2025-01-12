import CardComponent from '../components/CardComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap'
import '../App.css'
import React from 'react'


// IMAGES 
import Ferrari from '../assets/images/ferrari.jpg'
import Lambo from '../assets/images/lamborghini.jpg'
import Porsche from '../assets/images/porsche.jpg'
import Koenisegg from '../assets/images/koenigsegg.jpg'
import Bugatti from '../assets/images/bugatti.jpg'
import Tuatara from '../assets/images/tuatara.jpg'
import Aston from '../assets/images/aston_martin.jpg'

import Header from '../components/Header';


const Luxury = () => {
  return (
    <>
    <Header/>

   <h1 className='display-1 mt-5 mb-4 text-white'>Luxury Cars</h1>

  {/* 1 ROW 2 COLUMN CardComponentS */}
  <Container>

 <Row className='g-4'>
  
   
   <Col>
   <CardComponent
    model='Ferrari'
    image={Ferrari}
    description='America’s ultimate muscle car, featuring a supercharged 5.2L V8 producing 760 hp.'
    speed={211}
    buttonText='Learn More'
   
   />
   </Col>
   
   
   <Col>
   <CardComponent
    model='Lamborghini'
    image={Lambo}
    description='The Lamborghini Aventador SVJ is a V12-powered supercar with 759 hp.'
    speed={221}
    buttonText='Learn More'
   
   />
   </Col>

   <Col>
   <CardComponent
    model='Porsche'
    image={Porsche}
    description='The Porsche 911 Turbo S is a 640 hp supercar with a 3.8L twin-turbo flat-six'
    speed={193}
    buttonText='Learn More'
   
   />
   </Col>

   <Col>
   <CardComponent
    model='Bugatti'
    image={Bugatti}
    description='The Bugatti Chiron Super Sport is a 1,578 hp hypercar with an 8.0L quad-turbo W16.'
    speed={304}
    buttonText='Learn More'
   
   />
   </Col>

   <Col>
   <CardComponent
    model='Aston Martin'
    image={Aston}
    description='The Aston Martin DBS Superleggera is a 715 hp grand tourer with a 5.2L twin-turbo V12.'
    speed={205}
    buttonText='Learn More'
   
   />
   </Col>

   <Col>
   <CardComponent
    model='Koegnisegg'
    image={Koenisegg}
    description='The Koenigsegg Jesko Absolut is a 1,600 hp hypercar with a 5.0L twin-turbo V8.'
    speed={310}
    buttonText='Learn More'
   
   />
   </Col>
   <Col>
   <CardComponent
    model='Tuatara'
    image={Tuatara}
    description='The SSC Tuatara is a 1,750 hp hypercar with a 5.9L twin-turbo V8.'
    speed={282}
    buttonText='Learn More'
   
   />
   </Col>



 </Row>
</Container>

    </>
  )
}

export default Luxury
