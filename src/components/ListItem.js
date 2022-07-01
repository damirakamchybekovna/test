import styled from "styled-components"

const ListItem = (props) => {

  return (

    <Item onClick={props.onClick}>
      {props.children}
    </Item>
  )
}

const Item = styled.li`
    list-style: none;
    width: 560px;
    background-color: #ECE3F0;
    cursor: pointer;
    padding: 14px;
    margin-top: 10px;
    margin-left: -40px;
    border: none;
    border-radius:3px;
`

export default ListItem
