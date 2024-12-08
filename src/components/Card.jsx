import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ model, image, description, buttonText}) => {

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
    <div className='card' style={cardHeight}>
        <img src={image} className="card-top" alt="card image" style={imageStyle} />
        <div className='card-body'>
            <h1 className='card-title fs-6'>{model}</h1>
            <p className='card-text' style={textStyle}>{description}</p>
            <button className='btn btn-dark btn-lg'>{buttonText}</button>

        </div>
      
    </div>
  )
}

Card.propTypes = {
    model: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired,
    buttonText: PropTypes.string.isRequired,
}

Card.defaultProps = {
   model: "No model",
   image: "No image",
   description: "No description",
   buttonText: "No button text",
}

export default Card
