import NextImage from 'next/image'
import Link from 'next/link'

import clsx from 'clsx'
import React from 'react'


import { DEVTO_PROFILE, PROFILE_URL } from '@/common/constant'

import Image from '../../elements/Image'



interface ProfileHeaderProps {
  expandMenu: boolean
  imageSize: number
}

export default function ProfileHeader({ expandMenu, imageSize }: ProfileHeaderProps) {
  return (
    <div
      className={clsx(
        'flex items-center gap-4 md:gap-0.5 flex-grow md:flex-col w-full',
        
      )}
    >
      <div className="relative overflow-hidden hidden w-full pb-2 lg:flex flex-col items-center">
       
     
        <div className="">
          <Image
            src={PROFILE_URL}
            alt="profile"
            width={80}
            height={ 80 }
            rounded="rounded-full"
            className="md:hover:scale-105"
          />
        </div>
      </div>
      <Image
        src={PROFILE_URL}
        alt="profile"
        width={50}
        height={50}
        rounded="rounded-full"
        className="md:hover:scale-105 lg:hidden"
      />
      <div className="flex gap-2 items-center">
        <Link href="/" passHref>
          <h2 className="flex-grow text-sm md:text-xl font-sora font-medium">Muhammad Angga Adytya</h2>
        </Link>
      </div>
      <Link
        href={DEVTO_PROFILE}
        target="_blank"
        className="hidden md:flex text-sm font-sora text-neutral-600 hover:text-neutral-700 transition-all duration-300"
      >
        @Angga_Adytya
      </Link>
    </div>
  )
}
