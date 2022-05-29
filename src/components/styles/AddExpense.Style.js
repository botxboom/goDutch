import styled from "styled-components";

export const DropDownSelect = styled.select`
  display: flex;
  align-items: center;
  text-align: center;
  height: 3rem;
  width: 20rem;
  font-size: 2rem;
  border-radius: 3px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #fff;
  cursor: pointer;
  color: white;
  padding: 1rem 4rem;
  border-radius: 3px;
  background-color: #3bacb6;
  outline: none;
  border: none;
  font-size: 1.8rem;
  transition: all 0.5s ease;
  &:active {
    transform: translateY(1rem);
  }
  &:hover {
    background-color: #2f8f9d;
  }
`;

export const FormInput = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  margin-left: 5%;
  margin-right: 5%;
  justify-content: center;
  gap: 1rem;
`;

export const FormContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  height: 3rem;
  width: 20rem;
  text-align: center;
  font-size: 2rem;
  border-radius: 3px;

  ::placeholder {
    color: #b0bec5;
  }

  &:focus {
    ::placeholder {
      opacity: 0;
    }
  }
`;

export const PageContainer = styled.div`
  padding: 5rem;
`;
