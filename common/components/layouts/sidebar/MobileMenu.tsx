import { motion } from 'framer-motion'
import { FC } from 'react'

import { MENU_ITEMS, SOCIAL_MEDIA } from '@/common/constant/menu'

import Copyright from '../../elements/Copyright'
import Breakline from '../../elements/Breakline'
import Menu from './Menu'

const MobileMenu: FC = () => {
  const filterdMenu = MENU_ITEMS?.filter(item => item?.isShow)
  const socialMedia = SOCIAL_MEDIA?.filter(item => item?.isShow)
  return (
    <motion.div
      className="h-screen flex flex-col my-3"
      initial={{ x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, stiffness: 120, type: 'tween' }}
    >
      <div>
        <Breakline className="mt-2" />
        <Menu list={filterdMenu} />
      </div>
      <Breakline />
      <Copyright/>
    </motion.div>
  )
}

export default MobileMenu
