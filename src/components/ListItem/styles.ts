import styled from "styled-components";

type ContainerProps = {
  done: boolean;
};

export const Container = styled.div(({ done }:ContainerProps) => (`
  display: flex;
  background-color: #20212C;
  padding: 10px;
  border-radius: 10px;
  margin: 10px 0;
  align-items: center;
  
  input {
    width: 25px;
    height: 25px;
    margin-right: 8px; 
  }

  label {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
    text-decoration: ${done ? 'line-through' : 'initial'};
  }
`));