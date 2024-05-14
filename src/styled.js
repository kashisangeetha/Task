import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
`
export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 36px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const LabelText = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 22px;
`
export const Input = styled.input`
  height: 22px;
  width: 94%;
  font-family: 'Roboto';
  font-size: 24px;
  cursor: pointer;
`
export const Select = styled.select`
  height: 45px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 24px;
  cursor: pointer;
  font-weight: normal;
`
export const AddButton = styled.button`
  height: 45px;
  width: 150px;
  font-family: 'Roboto';
  font-size: 24px;
  cursor: pointer; 
  background-color: #f3aa4e;
  color:: #ffffff;
`
export const TagsHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin: 20px;
`
export const NoTaskText = styled.p`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin: 20px;
`
export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
`
export const TagListItem = styled.li`
  list-style-type: none;
`
export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
