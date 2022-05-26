import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem;
`;

export const ListCard = styled.div`
  display: flex;
  width: 60rem;
  color: white;
  justify-content: center;
  padding: 0rem 1rem 0rem 3rem;
  background-color: #3bacb6;
  border-radius: 3px;
`;

export const ListContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 80%;
`;

export const ListActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
  height: 100%;
`;

export const ActionButton = styled.button`
  padding: 1rem;
  outline: blue;
  background-color: transparent;
  border: none;
  cursor: pointer;
  box-shadow: inset;

  &:hover {
    transform: scale(1.08);
  }
  &:active {
    transform: translateY(0.1rem);
  }
`;
