'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useState } from 'react'
import { LinkSimple as ExternalLinkIcon } from '@phosphor-icons/react'

import { MenuItemProps } from '@/common/types/menu'

import { useMenu } from '@/store/menu'

export default function MenuItem({ title, href, icon, onClick, className = '', children }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { hideMenu } = useMenu()
  const isExternalUrl = href?.includes('http')
  const isHashLink = href === '#'
  const pathname = usePathname()
  const url = new URL(href, 'https://angga-portofolio-v2.vercel.app/')

  const activeClasses = `flex items-center gap-2 py-2 px-4 text-neutral-700 hover:text-neutral-900  rounded-lg ${
    pathname === url.pathname
      ? 'bg-neutral-100  text-neutral-900 dark:!text-neutral-300'
      : 'hover:lg:bg-neutral-100 hover:lg:rounded-lg lg:hover:scale-105 lg:hover:gap-3 lg:transition-all lg:duration-300'
  }`

  const handleClick = () => {
    hideMenu()
    if (onClick) onClick()
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const elementProps = {
    className: `${activeClasses} ${className}`,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }

  const itemComponent = () => {
    return (
      <div {...elementProps}>
        <div>{icon}</div>
        <div className="flex-grow ml-0.5">{title}</div>
        {children && <>{children}</>}
        {isExternalUrl && isHovered && (
          <ExternalLinkIcon size={22} className="text-gray-500 -rotate-45 md:transition-all md:duration-300" />
        )}
      </div>
    )
  }

  return isHashLink ? (
    <div className="cursor-pointer">{itemComponent()}</div>
  ) : (
    <Link aria-label={title} tabIndex={0} href={href} target={isExternalUrl ? '_blank' : ''} onClick={handleClick}>
      {itemComponent()}
    </Link>
  )
}
