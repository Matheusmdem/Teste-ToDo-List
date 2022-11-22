import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  

  .firstBar {
    display: flex;
    align-items: center;
    justify-content: right;
    background: black;
    width: 100%;
    gap: 2rem;
    height: 2.8rem;
    padding: 0 17rem;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: -0.5px;

    a{
      color: white;
      &:hover {
        opacity: 0.7;
      }

      &:not(:first-child) {
        text-decoration: none;
      }
    }


  }

  .secondBar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fcfcd0;
    width: 100%;
    height: 5rem;
    padding: 3rem 17rem;

    a {
      text-decoration: none;
    }

    .logoDiv {
      display: flex;
      align-items: center;
      gap: 2rem;
      
      span {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #000b50;
      }

      a {
        font-size: 1.1rem;
        color: black;
        &:hover {
          color: #1d6ae5;
        }
      }

      button {
        border: none;
        background: darkred;
        color: white;
        padding: 0.3rem 0.5rem;
        border-radius: 0.5rem;
        font-weight: bold;


        &:hover {
          opacity: 0.85;
          cursor: pointer;
        }
      }
    }

    .loginDiv {
      display: flex;
      align-items: center;
      gap: 2rem;

      a {
        font-size: 1.1rem;
        color: black;
        &:hover {
          color: #1d6ae5;
          border-bottom: 2px solid #1d6ae5;
        }
      }

      button {
        border: none;
        background: #1d6ae5;
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
  }
`