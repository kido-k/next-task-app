import Link from 'next/link'
import { MdAddTask } from 'react-icons/md'
import TaskCard from '@/components/TaskCard/TaskCard'

export default function MainPage() {
  return (
    <div className='h-full overflow-y-auto p-8 pb-24 text-gray-800'>
      <header className='flex items-center justify-between'>
        <h1 className='flex items-center text-2xl font-bold'>All Tasks</h1>
        <Link
          href='/new'
          className='flex items-center gap-1 rounded-full border bg-gray-800 px-4 py-2 font-semibold text-white shadow-sm hover:bg-gray-700'
        >
          <MdAddTask className='size-5' />
          <p>Add Task</p>
        </Link>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        <TaskCard />
      </div>
    </div>
  )
}
