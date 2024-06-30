import NavList from '@/components/SideMenu/NavList/NavList'

const SideMenu = () => {
  return (
    <div className='w-56 bg-gray-800 pt-8 text-white'>
      <div>
        <h1 className='px-4 text-2xl font-bold'>Next Tasks</h1>
        <NavList></NavList>
      </div>
    </div>
  )
}

export default SideMenu
