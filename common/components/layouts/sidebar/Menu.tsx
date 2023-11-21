import React from 'react'

import { MenuItemProps } from '@/common/types/menu'

import MenuItem from './MenuItem'

type MenuProps = {
  title?: string
  list: MenuItemProps[]
}
export default function Menu({ title, list }: MenuProps) {
  return (
    <div className="md:flex md:flex-col space-y-1">
      {title && (
        <div className="hidden md:block text-sm ml-2 mt-1 mb-2 text-neutral-600 font-sora">
          {title}
        </div>
      )}
      {list?.map((item: MenuItemProps, index: number) => <MenuItem key={index} {...item} />)}
    </div>
  )
}
