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
              <p>Pipelines Design on GitHub Actions</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Pipelines Design on CircleCI or Jenkins</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuous Integration, Gitflow Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Analyze your delivery workflow</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Continuous Delivery, Gitflow Design</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Version Control</p>
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
              <p>Cost Management and Estipulation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Resource Managing and Estipulation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementation of Automated Process</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Security and Compliance advisory</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Third Party Integration</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backup Implementation</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Infrastructure Cloud Management on GCP, AWS, Azure and others</p>
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
              <p>Docker Oriented Infrastructure</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Kubernetes Infra</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Loadbalancing and Networking</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web Application Firewall</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blockchain Nodes</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web2 and Web3 Infrastructure</p>
            </li>

          </ul>
        </article>
        
        {/* END OF PIPELINES */}

      </div>
    </section>
  )
}

export default Services