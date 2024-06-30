import { FaTrashAlt } from 'react-icons/fa'

interface TaskDeleteButtonProps {
  id: string
}

const TaskDeleteButton: React.FC<TaskDeleteButtonProps> = ({ id }) => {
  return (
    <form action=''>
      <button type='submit' className='hover: cursor-pointer text-lg text-gray-700'>
        <FaTrashAlt />
      </button>
    </form>
  )
}

export default TaskDeleteButton
