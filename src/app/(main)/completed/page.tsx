import { TaskDocument } from '@/app/modules/task'
import TaskCard from '@/components/TaskCard/TaskCard'

interface TaskResponse {
  message: string
  tasks: TaskDocument[]
}

const getCompletedTasks = async (): Promise<TaskDocument[]> => {
  const url: string = `${process.env.API_URL}/tasks/completed`
  const response = await fetch(url, {
    cache: 'no-store',
  })

  if (response.status !== 200) {
    throw new Error()
  }

  const data: TaskResponse = await response.json()
  return data.tasks
}

const CompletedTaskPage = async () => {
  const completedTasks = (await getCompletedTasks()) || []

  return (
    <div className='h-full overflow-y-auto p-8 pb-24 text-gray-800'>
      <header className='flex items-center justify-between'>
        <h1 className='flex items-center text-2xl font-bold'>Completed Tasks</h1>
      </header>
      <div className='mt-8 flex flex-wrap gap-4'>
        {completedTasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default CompletedTaskPage
