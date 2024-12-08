import React from 'react'
import PropTypes from 'prop-types'
import { Card, Button } from 'react-bootstrap'

const CardComponent = ({ model, image, description, buttonText}) => {

  // STYLES
  const imageStyle = {
    height: '200px',
    objectFit: 'cover',
  };

  const cardHeight = {
    height: '100%',
  }

  const textStyle = {
    textAlign: 'justified',
  }


  return (
    // USING DIV
    <div className='card' style={cardHeight}>
        <img src={image} className="card-top" alt="card image" style={imageStyle} />
        <div className='card-body'>
            <h1 className='card-title fs-6'>{model}</h1>
            <p className='card-text' style={textStyle}>{description}</p>
            <button className='btn btn-dark btn-lg'>{buttonText}</button>

        </div>
      
   </div>
   // USING BOOTSTRAP CARD
  //   <Card style={cardHeight}>
  //   <Card.Img variant="top" src={image} style={imageStyle} />
  //   <Card.Body>
  //     <Card.Title>{model}</Card.Title>
  //     <Card.Text>
  //       {description}
  //     </Card.Text>
  //     <Button variant="primary">{buttonText}</Button>
  //   </Card.Body>
  // </Card>
  )
}

CardComponent.propTypes = {
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired,
}

CardComponent.defaultProps = {
   model: "No model",
   image: "No image",
   description: "No description",
   buttonText: "No button text",
}

export default CardComponent
