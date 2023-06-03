import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Counter from '../components/counter'
import PrimaryButton from '../components/primary-button'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {

  

  const [showmore, setshowmore] = useState(false);

  const vision = 'To be the epitome of excellence in the esports industry, achieving a perfect 10/10 in every aspect of our operations, and setting new benchmarks for innovation, professionalism, and customer satisfaction.'
  const mission = 'Our mission is to deliver unparalleled esports experiences, leveraging our expertise, passion, and cutting-edge technology. We strive to provide exceptional services, create engaging content, and foster a vibrant community, while continuously pushing the boundaries of what is possible in the world of esports.'
  const goal1 = "Achieve 10/10 Client Satisfaction: We are committed to exceeding our clients' expectations by delivering exceptional services and cultivating long-lasting relationships built on trust, reliability, and outstanding results. "
  const goal2 = "Establish a 10/10 Esports Broadcasting Standard: We aim to set a new standard for esports broadcasting, utilizing state-of-the-art technology, top-notch production quality, and innovative storytelling techniques to captivate audiences and elevate the viewing experience to a perfect 10/10."
  const goal3 = "Cultivate a 10/10 Esports Community: We strive to foster a vibrant and inclusive esports community, where players, teams, fans, and partners can come together to celebrate their passion for gaming. By organizing engaging events, promoting sportsmanship, and supporting grassroots initiatives, we aim to create a 10/10 environment for everyone involved."
  const goal4 = "Lead with 10/10 Innovation: We are dedicated to staying at the forefront of technological advancements and industry trends. By continuously exploring new technologies, refining our processes, and embracing innovation, we aim to lead the way in shaping the future of esports broadcasting and organizing."
  const goal5 = "Contribute to a 10/10 Sustainable Future: We recognize the importance of sustainability and social responsibility. Our goal is to incorporate eco-friendly practices into our operations, support charitable initiatives, and promote diversity and inclusion within the esports industry, striving to make a positive impact and contribute to a perfect 10/10 future."
  const closing = "By embodying our vision, pursuing our mission, and working towards our goals, we are committed to achieving excellence in every aspect of our operations and ensuring a perfect 10/10 experience for all stakeholders involved in the world of esports."
  
  const handleLinkClick = () => {
    window.open('https://m.me/wethe1010', '_blank');
  };
  
  
  return (
    <div className="profile-container">
      <Helmet>
        <title>About us - 10/10</title>
        <meta property="og:title" content="About us - 10/10" />
      </Helmet>
      <div className="profile-image">
        <Header rootClassName="header-root-class-name2"></Header>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="profile-image1"
        />
        <div className="profile-bg"></div>
      </div>
      <div className="profile-container01">
        <div className="profile-container02">
          <div className="profile-container03">
            <Counter type="Facebook" number="1,200"></Counter>
            <Counter type="Members" number="4"></Counter>
            <Counter type="Events" number="7"></Counter>
          </div>
          <img
            alt="image"
            src="/playground_assets/untitled-11-200h.png"
            className="profile-image2"
          />
          <div className="profile-container04">
            <div className="profile-container05">
              <PrimaryButton button="connect"></PrimaryButton>
            </div>
            <SecondaryButton onClick = {handleLinkClick} button="message"></SecondaryButton>
          </div>
        </div>
        <div className="profile-container06">
          <h1 className="profile-text">
            <span>@wethe1010</span>
            <br></br>
          </h1>
          <div className="profile-container07">
            <svg viewBox="0 0 1024 1024" className="profile-icon">
              <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
            </svg>
            <span className="profile-text3 TextSM">
              SANTA BARBARA. PANGASINAN
            </span>
          </div>
          <div className="profile-container08">
            <svg viewBox="0 0 1024 1024" className="profile-icon2">
              <path d="M810.667 213.333h-597.333l64-85.333h469.333zM929.877 230.059l-127.744-170.325c-8.363-11.136-21.077-17.024-34.133-17.067h-512c-13.909 0-26.283 6.656-34.133 17.067l-127.744 170.325c-1.835 2.389-3.456 5.035-4.736 7.808-2.773 5.803-4.096 12.032-4.053 18.133v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-9.344-3.029-18.005-8.064-24.96-0.171-0.213-0.299-0.427-0.469-0.64zM170.667 298.667h682.667v554.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-597.333c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165zM640 426.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667c0 58.88 23.936 112.299 62.464 150.869s91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667z"></path>
            </svg>
            <span className="profile-text4">ESPORTS EVENT | LIVE EVENTS | OFFLINE EVENTS</span>
          </div>
          <div className="profile-container09"></div>
          <h1>Vision</h1>
          <span className="profile-text5">
            {vision}
          </span>
          <h2>Mission</h2>
          <span className="profile-text5">
            {mission}
          </span>
          <h2>Our Goal</h2>
          <span className="profile-text5 text-align">
            1. {goal1}
          </span>
          <span className="profile-text5 text-align">2. {goal2}</span>
          <span className="profile-text5 text-align">3. {goal3}</span>
          <span className="profile-text5 text-align">4. {goal4}</span>
          <span className="profile-text5 text-align">5. {goal5}</span>
          <span className="profile-text6"> {closing}
            <span></span>
          </span>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
