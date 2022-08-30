import React from 'react'
import './portafolio.css'
import IMG1 from '../../assets/canodrome.png'
import IMG2 from '../../assets/ignition-launchpad.png'
import IMG3 from '../../assets/ignition-staking.png'
import IMG4 from '../../assets/valifi-app.png'
import IMG5 from '../../assets/valifi-dapp.png'
import IMG6 from '../../assets/ncsa.png'

const Portafolio = () => {
  return (
    <section id='section'>
      <h5>My Recent Work</h5>
      <h2>Portafolio</h2>

      <div className='container portfolio__container'>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Canodrome NFT</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/rubengue/" className='btn'>GitHub</a>
            <a href="https://launchpad.canodrome.com/private-sales/" className='btn btn-primary' target='_blank'>Web App</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Paid Ignition Launchpad</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/rubengue/" className='btn'>GitHub</a>
            <a href="https://ignition.paidnetwork.com//" className='btn btn-primary' target='_blank'>Web App</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>Paid Ignition Staking</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/rubengue/" className='btn'>GitHub</a>
            <a href="https://ignition.paidnetwork.com/staking/" className='btn btn-primary' target='_blank'>Web App</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>Valifi App</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/rubengue/" className='btn'>GitHub</a>
            <a href="https://valifi.app/" className='btn btn-primary' target='_blank'>Web Development</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Valifi Launchpad</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/rubengue/" className='btn'>GitHub</a>
            <a href="https://dapp.valifi.app/dashboard/" className='btn btn-primary' target='_blank'>Web App</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className='portafolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>NCSA Co;;ege recruiting Infrastructure Collaborator</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/rubenrguev/" className='btn'>GitHub</a>
            <a href="https://www.ncsasports.org/best-colleges/" className='btn btn-primary' target='_blank'>Web Page</a>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Portafolio