import React from 'react'

interface TitleProps {
    icons?: React.ReactNode
    title: string
}

const Title = ({icons, title}: TitleProps) => {
  return (
    <div className='pb-2 flex items-center gap-2 '>
        {icons}
      <h1 className='text-sm font-semibold'>{title}</h1>
    </div>
  )
}

export default Title