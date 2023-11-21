'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import React, { useEffect } from 'react'

import { useMenu } from '@/store/menu'

import useIsMobile from '@/hooks/useIsMobile'


import MobileMenu from './MobileMenu'
import MobileMenuButton from './MobileMenuButton'
import ProfileHeader from './ProfileHeader'

export default function Profile() {
  const isMobile = useIsMobile()
  const imageSize = isMobile ? 40 : 100
  const { isOpen, toggleMenu } = useMenu()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <div
      className={clsx(
        'z-20 fixed shadow-sm xl:shadow-none md:border-none bg-white md:!bg-transparent w-full p-5 md:relative md:p-0',
        isOpen && 'pb-0'
      )}
    >
      <div className="flex items-start justify-between md:flex-col md:space-y-4 ">
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
        {isMobile && (
          <div
            className={clsx(
              'flex md:hidden items-center gap-5 mt-3',
              isOpen && '!items-end flex-col-reverse justify-between  pb-1'
            )}
          >
            
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>

      {isMobile && <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>}
    </div>
  )
}
