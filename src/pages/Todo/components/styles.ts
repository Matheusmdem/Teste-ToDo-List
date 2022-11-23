import styled from "styled-components";

export const TasksContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .inputTask {
    margin-top: 1rem;
    padding: 1rem 2rem;
    background: #f5f5f5;
    border-radius: 0.5rem;
    width: 100%;
    box-shadow: 1px 0px 5px rgba(50, 50, 50, 0.40);

    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
      width: 46rem;
      height: 3rem;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    .buttonDiv {
      display: flex;
      align-items: center;
      gap: 1rem;

      button {
        background: transparent;
        border: none;

        &:hover {
          cursor: pointer;
          color: green;
        }
      }

      button:not(:first-child) {
        background: transparent;
        border: none;

        &:hover {
          cursor: pointer;
          color: red;
        }
      }

    }
  }
`