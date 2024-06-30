import EditTaskForm from '@/components/EditTaskForm/EditTaskForm'

interface Prams {
  params: { id: string }
}

const EditTaskPage = ({ params }: Prams) => {
  // const id = params.id
  return (
    <div className='flex flex-col justify-center py-20'>
      <h2 className='text-center text-2xl font-bold'>Edit Task</h2>
      <EditTaskForm />
    </div>
  )
}

export default EditTaskPage