import { BodyContainer, HomeContainer } from "./styles";
import mobile from '../../assets/celular.png'
import businessInsider from '../../assets/business-insider.png'
import cnbc from '../../assets/cnbc-gray.png'
import forbes from '../../assets/forbes-gray.png'
import theNewYorkTimes from '../../assets/the-new-york-times-gray.png'
import riverBoat from '../../assets/svg/svgexport-1.svg'

export function Home() {
  return (
    <HomeContainer>
      <header>
        <div className="spanImages">
          <h1>Investing made better</h1>
          <p>Meet the app that gives you the tools, inspiration, and support to help you become a better investor</p>
          <span>
            <img src={theNewYorkTimes} />
            <img src={cnbc} />
            <img src={businessInsider} />
            <img src={forbes} />
          </span>
        </div>
        <img src={mobile} />
      </header>
      <BodyContainer>
        <img src={riverBoat} />
        <section className="benefitsSection">
          <div>
            <strong>Investing built for a better future.</strong>
            <p>Whether you're starting with $10 or $10M,</p>
            <p>we're built to help you reach your financial goals</p>
          </div>
        </section>
      </BodyContainer>
    </HomeContainer >

  )
}