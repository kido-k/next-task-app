import { TaskDocument } from '@/app/modules/task'
import TaskCard from '@/components/TaskCard/TaskCard'

const getExpiredTasks = async (): Promise<TaskDocument[]> => {
  const url: string = `${process.env.API_URL}/tasks/expired`
  const response = await fetch(url, {
    cache: 'no-store',
  })

  if (response.status !== 200) {
    throw new Error()
  }

  const data = await response.json()
  return data.tasks as TaskDocument[]
}

const ExpiredTaskPage = async () => {
  const expiredTasks = (await getExpiredTasks()) || []

  return (
    <div className='h-full overflow-y-auto p-8 pb-24 text-gray-800'>
      <header className='flex items-center justify-between'>
        <h1 className='flex items-center text-2xl font-bold'>Expired Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {expiredTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default ExpiredTaskPage
