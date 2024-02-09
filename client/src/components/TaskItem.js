import { useDispatch } from 'react-redux';
import { deleteTask } from '../features/tasks/taskSlice';
import { FaTrash } from "react-icons/fa";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div className='task'>
            <div>{new Date(task.createdAt).toLocaleString('en-US')}</div>
            <h2>{task.text}</h2>
            <button onClick={() => dispatch(deleteTask(task._id))} className='close'>
                <span style={{fontSize: '20px', color:'#FE6B46'}}><FaTrash /></span>
            </button>
        </div>
    );
}
export default TaskItem;