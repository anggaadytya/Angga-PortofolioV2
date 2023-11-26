import { MenuItemProps } from '@/common/types/menu'
import SocialMediaItem from '@/common/components/layouts/sidebar/SocialMediaItem'
import React from 'react'

interface socialMediaProps {
    title?: string;
    list: MenuItemProps[];
}


const SocialMedia = ({list, title}:socialMediaProps) => {
  return (
    <div>
        <div className="text-sm ml-2 mt-1 mb-2 text-neutral-600 font-sora">
            {title}
        </div>
        <div className="flex items-center gap-2">
            {list.map((item: MenuItemProps, index: number) => <SocialMediaItem key={index} {...item} />)}
        </div>
    </div>
  )
}

export default SocialMedia