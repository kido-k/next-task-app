'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItemProps {
  label: string
  link: string
  icon: React.ReactNode
}

const NavItem: React.FC<NavItemProps> = ({ label, link, icon }) => {
  const pathName = usePathname()
  return (
    <Link
      href={link}
      className={`flex w-full items-center p-4 font-medium hover:bg-gray-700 ${pathName === link ? 'border-r-8 border-r-green-500 bg-gray-600' : ''}`}
    >
      <div className='mr-2'>{icon}</div>
      <div>{label}</div>
    </Link>
  )
}

export default NavItem
