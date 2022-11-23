import React from 'react'
import Image from 'next/image'

interface ThumbnailProps {
  src: string
  width: number
  height: number
  alt?: string
  layout?: 'fixed' | 'fill' | 'intrinsic' | 'responsive' | undefined
  priority?: boolean
}

export const Thumbnail: React.FC<ThumbnailProps> = (props) => {
  const { src, width, height, alt, layout, priority } = props

  return (
    <Image
      src={src}
      width={width}
      height={height}
      layout={layout}
      alt={alt}
      style={{ borderRadius: 8 }}
      priority={priority}
    />
  )
}
