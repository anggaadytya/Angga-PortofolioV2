'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'

import clsx from 'clsx'
import { useState } from 'react'

type ImageProps = {
  rounded?: string
} & NextImageProps

const Image = (props: ImageProps) => {
  const { alt, src, className, rounded, ...rest } = props
  const [isLoading, setLoading] = useState(true)

  return (
    <div className={clsx('overflow-hidden', isLoading ? 'animate-pulse' : '', rounded)}>
      <NextImage
        className={clsx(
          'duration-700 ease-in-out',
          isLoading ? ' blur-xl grayscale' : 'blur-0 grayscale-0',
          rounded,
          className
        )}
        src={src}
        alt={alt}
        loading="lazy"
        quality={100}
        onLoadingComplete={() => setLoading(false)}
        {...rest}
      />
    </div>
  )
}
export default Image
