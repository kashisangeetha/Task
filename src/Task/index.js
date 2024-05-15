import {TaskName, TagsCategory, ListItem} from './style'

const Task = props => {
  const {taskDetails} = props
  const {taskName, taskCategory} = taskDetails

  return (
    <ListItem>
      <TaskName>{taskName}</TaskName>
      <TagsCategory>{taskCategory}</TagsCategory>
    </ListItem>
  )
}
export default Task
