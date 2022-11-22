import styled from 'styled-components'

export const HomeContainer = styled.section`
  
  header {
    background: #fcfcd0;
    padding: 0 0 0 17rem;
    display: flex;

    .spanImages {
      margin-top: 5rem;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      h1 {
        font-size: 5rem;
        font-weight: 400;
      }

      p {
        font-size: 1.1rem;
        line-height: 2rem;
      }

      span {
        display: flex;
        align-items: center;
        gap: 1.1rem;
        margin-top: 3rem;

        img:nth-child(1) {
          width: 10rem;
        }
        img:nth-child(2) {
          width: 3rem;
        }
        img:nth-child(3) {
          width: 5rem;
        }
        img:nth-child(4) {
          width: 5rem;
        }
      }
    }

    img {
      margin-top: 2rem;
    }
  }
`

export const BodyContainer = styled.div`
    background-color: #000b50;
  img{
    width: 100%;
    margin-top: -8.4rem;
    
  }

  .benefitsSection {
    padding: 0 17rem;
    margin: auto;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      margin-top: 6rem;

      strong {
        text-align: center;
        font-size: 2rem;
        width: 16rem;
        line-height: 2.5rem;
        margin-bottom: 1rem;
      }

      p {
        text-align: center;
        line-height: 1.5rem;
      }
    }
  }
`