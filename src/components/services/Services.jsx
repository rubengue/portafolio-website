import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div container className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>CI/CD Pipelines design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

          </ul>
        </article>

        {/* END OF PIPELINES */}

        <article className='service'>
          <div className='service__head'>
            <h3>Cloud Infra Management</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet lol consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

          </ul>
        </article>
        
        {/* END OF INFRA DESIGN */}

        <article className='service'>
          <div className='service__head'>
            <h3>Infrastructure Arquitecture</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Lorem ipsum, dolor sit amet consectur elit</p>
            </li>

          </ul>
        </article>
        
        {/* END OF PIPELINES */}

      </div>
    </section>
  )
}

export default Services