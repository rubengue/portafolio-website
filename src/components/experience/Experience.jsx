import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience__devops'>
          <h3>Devops Engineer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Kubernetes</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Pipelines</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Docker</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CI/CD</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Gitflow</h4> 
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF DEVOPS */}

        <div className='experience__cloud-arquitecture'>
        <h3>Cloud Computing</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Amazon AWS</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Google GCP</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Microsoft Azure</h4> 
                <small className='text-light'>Intermediate</small>
              </div> 
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cloudflare</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Github</h4> 
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
      </div>
      </div>
    </section>
  )
}

export default Experience