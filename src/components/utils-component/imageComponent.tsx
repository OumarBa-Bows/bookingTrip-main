import React from 'react'

interface ImageComponentProps {
    imgUrl :string ;
    height?:number ;
    width?: number
}

export default function ImageComponent({imgUrl , height=9 , width=9}: ImageComponentProps) {
  return (
    <div className="flex items-center gap-4">
    <div className={`hidden h-${height} w-${width} sm:flex`}>
        <img src={imgUrl} />
    </div></div>
  )
}
