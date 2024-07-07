import { TaskDocument } from '@/app/modules/task'
import EditTaskForm from '@/components/EditTaskForm/EditTaskForm'

interface Prams {
  params: { id: string }
}

const getTask = async (id: string): Promise<TaskDocument> => {
  const url: string = `${process.env.API_URL}/tasks/${id}`
  const response = await fetch(url, {
    cache: 'no-store',
  })
  const data = await response.json()
  return data.task as TaskDocument
}

const EditTaskPage = async ({ params }: Prams) => {
  const taskId = params.id
  const task = await getTask(taskId)
  return (
    <div className='flex flex-col justify-center py-20'>
      <h2 className='text-center text-2xl font-bold'>Edit Task</h2>
      <EditTaskForm task={task} />
    </div>
  )
}

export default EditTaskPage
