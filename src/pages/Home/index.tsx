import { BettermentBetter, BodyContainer, CardsFloat, HomeContainer, ImagesBody } from "./styles";
import mobile from '../../assets/celular.png'
import businessInsider from '../../assets/business-insider.png'
import cnbc from '../../assets/cnbc-gray.png'
import forbes from '../../assets/forbes-gray.png'
import theNewYorkTimes from '../../assets/the-new-york-times-gray.png'
import clock from '../../assets/clock.png'
import engine from '../../assets/engine.png'
import compass from '../../assets/compass.png'
import riverBoat from '../../assets/svg/svgexport-1.svg'
import halfCircle from '../../assets/svg/Arch illustration - desktop .svg'
import circle from '../../assets/svg/svgexport-2.svg'
import investing from '../../assets/svg/svgexport-3.svg'
import pricing from '../../assets/svg/svgexport-4.svg'
import heart from '../../assets/svg/svgexport-5.svg'
import calculator from '../../assets/svg/svgexport-6.svg'
import desktop from '../../assets/svg/svgexport-7.svg'
import assets from '../../assets/svg/Assets icon .svg'
import heart2 from '../../assets/svg/Heart icon.svg'
import medal from '../../assets/svg/Badge icon .svg'
import star from '../../assets/svg/Star icon.svg'


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
          <div className="textDiv">
            <strong>Investing built for a better future.</strong>
            <p>Whether you're starting with $10 or $10M,</p>
            <p>we're built to help you reach your financial goals</p>
          </div>
        </section>
      </BodyContainer>
      <ImagesBody>
        <div className="imagesDiv">
          <div>
            <img src={clock} />
            <h2>Easy</h2>
            <p>Get started with as little as $10 and use our top-rated mobile app to invest on the go.</p>
          </div>
          <div>
            <img src={engine} />
            <h2>Optimized</h2>
            <p>We put the robots to work for you, with automated tools and strategies that can help unlock your moneys potential.</p>
          </div>
          <div>
            <img src={compass} />
            <h2>Personalized</h2>
            <p>Customize your account, either as hands on as you want, or with our guidance along the way.</p>
          </div>
        </div>
        <img src={halfCircle} />
      </ImagesBody>
      <BettermentBetter>
        <strong>What makes Betterment better?</strong>
        <div className="cards">
          <div className="card">
            <img src={circle} />
            <h3>Built to make investing easy.</h3>
            <p>We'll guide you through portfolio options, risk levels, goal setting, and savings features.</p>
          </div>
          <div className="card">
            <img src={investing} />
            <h3>Diversified investing.</h3>
            <p>We custom-build our portfolios using ETFs or cryptocurrencies to give you better diversification. </p>
          </div>
          <div className="card">
            <img src={pricing} />
            <h3>Transparent pricing.</h3>
            <p>We offer lower cost investing options so everyone can decide what’s best for their money.</p>
          </div>
          <div className="card">
            <img src={heart} />
            <h3>Invest with your values.</h3>
            <p>Socially Responsible Investing can help make an impact while putting your money to work for you.</p>
          </div>
          <div className="card">
            <img src={calculator} />
            <h3>Limit tax impact.</h3>
            <p>Consider our tax strategies designed to help you limit the tax impact of your investments.</p>
          </div>
          <div className="card">
            <img src={desktop} />
            <h3>Track your finances.</h3>
            <p>Connect outside accounts to better inform our advice in one place.</p>
          </div>
        </div>
      </BettermentBetter>
      <CardsFloat>
        <div className="floatsCards">
          <div className="cardFloat">
            <img src={medal} />
            <span>
              <div>
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
                <img src={star} />
              </div>
              <p>4.7 rating - 35,000 reviews§</p>
            </span>
          </div>
          <div className="cardFloat">
            <img src={heart2} />
            <span>
              <h3>730,000+</h3>
              <p>customers</p>
            </span>
          </div>
          <div className="cardFloat">
            <img src={assets} />
            <span>
              <h3>$30.7 Billion</h3>
              <p>Assets under management</p>
            </span>
          </div>
        </div>
      </CardsFloat>
    </HomeContainer >
  )
}