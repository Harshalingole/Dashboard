import React from 'react'

const ImageTag = ({imgSrc,alt,imgStyle}) => {
  return (
    <img src={imgSrc} alt={alt} className={`bg-bgGray shadow-sm ${imgStyle}`} />
  )
}

export default ImageTag