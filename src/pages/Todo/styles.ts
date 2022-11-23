import styled from 'styled-components'

export const FormContainer = styled.div`
  background: #fcfcd0;
  padding: 2rem 17rem;

  .formBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2rem;

    input {
      width: 46rem;
      height: 3rem;
      padding: 1rem;
      border-radius: 0.5rem;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      border: none;
      background: #323238;
      color: white;
      width: 7.5rem;
      height: 3rem;
      border-radius: 0.5rem;
      font-weight: bold;

      &:hover {
        opacity: 0.85;
        cursor: pointer;
      }
    }
  }
`