import CardComponent from '../components/CardComponent'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap'
import '../App.css'
import React from 'react'


// IMAGES 
import Mustang from '../assets/images/mustang.jpg'
import Mclaren from '../assets/images/mclaren.jpg'
import Nissan from '../assets/images/nissan.jpg'

import Header from '../components/Header';


const StreetRace = () => {
  return (
    <>

    <Header/>

   <h1 className='display-1 mt-5 mb-4 text-white'>Street Race</h1>

  {/* 1 ROW 2 COLUMN CardComponentS */}
  <Container>

 <Row className='g-4'>
   <Col>
   <CardComponent
   model='Ford Mustang'
   image={Mustang}
   description='America’s ultimate muscle car, featuring a supercharged 5.2L V8 producing 760 hp.'
   speed={180}
   buttonText='Learn More'
   />
   </Col>
   <Col>
   <CardComponent
    model='Nissan GT-R'
    image={Nissan}
    description='Known as "Godzilla," this supercar packs a 3.8L twin-turbo V6 with 600 hp.'
    speed={205}
    buttonText='Learn More'
   
   />
   </Col>

   <Col>
   <CardComponent
    model='Mclaren'
    image={Mclaren}
    description='The McLaren 765LT is a track-focused supercar with a 4.0L twin-turbo V8 producing 755 hp.'
    speed={212}
    buttonText='Learn More'
   
   />
   </Col>
 


  
  
   
   
  



 </Row>
</Container>

    </>
  )
}

export default StreetRace
