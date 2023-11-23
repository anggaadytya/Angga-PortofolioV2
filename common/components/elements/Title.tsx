import React from 'react'

interface TitleProps {
    icons?: React.ReactNode
    title: string
}

const Title = ({icons, title}: TitleProps) => {
  return (
    <div className='px-2 pb-4 flex items-center gap-2 '>
        {icons}
      <h1 className='text-sm font-semibold'>{title}</h1>
    </div>
  )
}

export default Title