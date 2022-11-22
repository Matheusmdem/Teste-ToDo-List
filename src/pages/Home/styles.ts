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
    height: 30rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    .textDiv {
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

export const ImagesBody = styled.div`
  background: #f5f5f5;

  .imagesDiv {
    height: 30rem;
    padding: 0 17rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    div {
      width: 25rem;
      height: 25rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: 1.3rem;
      margin-top: -20rem;

      &:not(:nth-child(2)) {
        margin-top: -15rem;
      }

      img {
        width: 100%;
      }
    }
  }

  img {
    width: 100%;
    margin-bottom: -1rem;
  }
`

export const BettermentBetter = styled.div`
  background-color: #000b50;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  
  strong {
    font-size: 2rem;
  }
  
  .cards {
    margin-top: 3rem;
    margin-bottom: 10rem;
    padding: 0 17rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;

    .card {
      line-height: 1.5rem;
      width: 20rem;

      p {
        font-size: 0.9rem;
      }
    }
  }
`

export const CardsFloat = styled.div`
  background: #f5f5f5;
  
  .floatsCards {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .cardFloat {
      display: flex;
      align-items: center;
      background: white;
      width: 20rem;
      padding: 1rem 0.5rem;
      border-radius: 1rem;
      box-shadow: 1px 0px 15px rgba(50, 50, 50, 0.40);

      p {
        font-size: 0.8rem;
        color: #7C7C8A;
      }
    }

  }
`