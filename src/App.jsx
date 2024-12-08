import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col, Row } from 'react-bootstrap'

// IMAGES 
import Mustang from './assets/images/mustang.jpg'
import Ferrari from './assets/images/ferrari.jpg'
import Lambo from './assets/images/lamborghini.jpg'
import Porsche from './assets/images/porsche.jpg'
import Koenisegg from './assets/images/koenigsegg.jpg'
import Bugatti from './assets/images/bugatti.jpg'
import Mclaren from './assets/images/mclaren.jpg'
import Tuatara from './assets/images/tuatara.jpg'
import Aston from './assets/images/aston_martin.jpg'
import Nissan from './assets/images/nissan.jpg'
import { object } from 'prop-types'



function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Header/>
      <Container>
        {/* GAP BETWEEN CARDS */}
        <Row className='g-4'>
          <Col>
          <Card
          model='Ford Mustang'
          image={Mustang}
          description='America’s ultimate muscle car, featuring a supercharged 5.2L V8 producing 760 hp.'
          speed={180}
          buttonText='Learn More'
          />
          </Col>
          <Col>
          <Card
           model='Nissan GT-R'
           image={Nissan}
           description='Known as "Godzilla," this supercar packs a 3.8L twin-turbo V6 with 600 hp.'
           speed={205}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
           model='Ferrari'
           image={Ferrari}
           description='America’s ultimate muscle car, featuring a supercharged 5.2L V8 producing 760 hp.'
           speed={211}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
           model='Mclaren'
           image={Mclaren}
           description='The McLaren 765LT is a track-focused supercar with a 4.0L twin-turbo V8 producing 755 hp.'
           speed={212}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
           model='Lamborghini'
           image={Lambo}
           description='The Lamborghini Aventador SVJ is a V12-powered supercar with 759 hp.'
           speed={221}
           buttonText='Learn More'
          
          />
          </Col>


          <Col>
          <Card
           model='Porsche'
           image={Porsche}
           description='The Porsche 911 Turbo S is a 640 hp supercar with a 3.8L twin-turbo flat-six'
           speed={193}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
           model='Bugatti'
           image={Bugatti}
           description='The Bugatti Chiron Super Sport is a 1,578 hp hypercar with an 8.0L quad-turbo W16.'
           speed={304}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
           model='Aston Martin'
           image={Aston}
           description='The Aston Martin DBS Superleggera is a 715 hp grand tourer with a 5.2L twin-turbo V12.'
           speed={205}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
           model='Koegnisegg'
           image={Koenisegg}
           description='The Koenigsegg Jesko Absolut is a 1,600 hp hypercar with a 5.0L twin-turbo V8.'
           speed={310}
           buttonText='Learn More'
          
          />
          </Col>
          <Col>
          <Card
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

export default App