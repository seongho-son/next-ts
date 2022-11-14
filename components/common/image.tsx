import Image from 'next/image'
import React from 'react'

interface ThumbnailProps {
  src: string
  width: number
  height: number
  alt?: string
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined
}

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { src, width, height, alt, layout } = props

  return (
    <Image
      src={src}
      width={width}
      height={height}
      layout={layout}
      alt={alt}
      style={{ borderRadius: 8 }}
    />
  )
}
