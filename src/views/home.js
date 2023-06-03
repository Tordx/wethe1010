import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import MemberDetails from '../components/member-details'
import Footer from '../components/footer'
import './home.css'
import emailjs from '@emailjs/browser'



const Home = (props) => {

  const [fullname, setfullname] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [message, setmessage] = useState('')
  const [fromemail] = useState('sayhello@gmail.com');
  const [submitted, setsubmitted] = useState(true)

  const sendEmail = async(e) => {
    e.preventDefault();
    try {
      if(fullname || phonenumber || message ){
        emailjs.send('service_je6at7j', 'template_33ly7jh', {
          from_name: fullname,
          to_email: 'sayhello@vidarsson.online',
          phonenumber: phonenumber,
          message: "application for the tournament: " + message,
      },'sSc-DyhBoq3mI6150')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      setfullname('');
      setphonenumber('');
      setmessage('');
      setsubmitted(false)
      } else {
        alert('Please fill all the fields before you submit')
      }
    } catch (error) {

    }
    
}

  return (
    <div className="home-container">
      <Helmet>
        <title>10/10</title>
        <meta property="og:title" content="10/10" />
      </Helmet>
      <div className="home-hero">
        <div className="home-bg">
        <video autoPlay loop muted>
          <source src="path/to/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
        <Header rootClassName="header-root-class-name1"></Header>
        <div className="home-container01">
          <div className="home-container02">
            <SecondaryButton rootClassName="secondary-button-root-class-name1"></SecondaryButton>
          </div>
          <img
            alt="image"
            src="/playground_assets/download%20%5B1%5D.svg"
            loading="eager"
            className="home-image"
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container03">
          <div className="home-container04">
            <h6 className="home-text">
              EXPERIENCE THE NEW GENERATION ESPORTS HOSTING
            </h6>
            <h3 className="home-text01">@wethe1010</h3>
            <span className="home-text02 TextXL">
              We elevate e-sports event to new heights
            </span>
          </div>
          <div className="home-cards-container">
            <div className="home-card1">
              <div className="home-container05">
                <span className="home-text03">LIVE</span>
              </div>
              <h6 className="home-text04">BROADCAST ONLINE</h6>
              <span className="home-text05">
                Delivering captivating live streams and engaging content to
                immerse viewers in the thrilling world of competitive gaming.
              </span>
            </div>
            <div className="home-card2">
              <div className="home-container06">
                <svg viewBox="0 0 1024 1024" className="home-icon">
                  <path d="M140 106l42 44 714 714-54 54-320-322h-2l-8 2q-34 0-60-26t-26-60l2-8-68-68q-18 36-18 76 0 98 84 148l-42 74q-58-34-93-93t-35-129q0-76 40-138l-60-62q-66 92-66 200 0 92 46 171t124 125l-42 74q-98-56-155-155t-57-215q0-148 88-262l-88-90zM512 170q-86 0-160 40l-62-62q100-62 222-62 176 0 301 125t125 301q0 120-62 222l-64-62q42-78 42-160 0-140-101-241t-241-101zM750 608l-70-70q2-8 2-26 0-70-50-120t-120-50q-18 0-26 2l-70-70q44-18 96-18 106 0 181 75t75 181q0 52-18 96z"></path>
                </svg>
              </div>
              <h6 className="home-text06">
                <span>BROADCASTING OFFLINE</span>
                <br></br>
              </h6>
              <span className="home-text09">
                Our dedicated team is available 24/7 to address any concerns and
                ensure a seamless and enjoyable viewing experience for all.
              </span>
            </div>
            <div className="home-card3">
              <div className="home-container07">
                <svg
                  viewBox="0 0 1097.142857142857 1024"
                  className="home-icon2"
                >
                  <path d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"></path>
                </svg>
              </div>
              <h6 className="home-text10">
                <span>LAN TOURNAMENTS</span>
                <br></br>
              </h6>
              <span className="home-text13">
                Bring the excitement of esports to life, gathering players and
                teams in a physical venue where they compete creating an
                electrifying atmosphere, and fostering intense competition.
              </span>
            </div>
          </div>
          <div className="home-work-with-us">
            <div className="home-container08">
              <div className="home-container09">
                <img
                  alt="image"
                  src="/playground_assets/untitled-11-200h.png"
                  className="home-image2"
                />
              </div>
              <h3 className="home-text14">Unleash Success with Us!</h3>
              <span className="home-text15">
                <span>
                  We are your trusted partner, dedicated to delivering
                  outstanding work that exceeds your expectations
                </span>
                <br></br>
                <br></br>
                <span>
                  We pride ourselves on our attention to detail,
                  professionalism, and commitment to delivering exceptional
                  results.
                </span>
                <br></br>
                <br></br>
                <span>
                  By choosing us, you can be confident that your esports event
                  will receive the highest level of quality and attention it
                  deserves. Join our growing list of clients who have
                  experienced firsthand the excellence of our services.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container10">
              <div className="home-container11">
                <img
                  alt="image"
                  src="/playground_assets/download.svg"
                  className="home-image3"
                />
              </div>
              <div className="home-container12">
                <h4 className="home-text24 Healine">
                  <span>WE ALSO DO THE LIVE BROADCASTING FOR YOU</span>
                  <br></br>
                </h4>
                <span className="home-text27">
                  <span>
                    We understand the unique needs and demands of the rapidly
                    evolving esports industry, and we are here to help you
                    elevate your brand and reach new heights of success.
                  </span>
                  <br></br>
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className="home-image4"
        />
      </div>
      <div className="home-section2">
        <div className="home-container13">
          <h3 className="home-text30">
            <span className="home-text31 Healine">
              We might be small, but we handle major events
            </span>
            <br></br>
          </h3>
          <span className="home-text33 TextXL">
            We&apos;re behind these client&apos;s live gaming events.
          </span>
        </div>
        <div className="home-team">
          <div className="home-container14">
            <Link to="/profile" className="home-navlink">
              <div className="home-container15">
                <MemberDetails
                  heading1="SK Maronong"
                  image_src="/playground_assets/335204674_159339113640798_6459687634830556726_n-200h.jpg"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profile" className="home-navlink1">
              <div className="home-container16">
                <MemberDetails
                  heading1="SK Matic-Matic"
                  image_src="/playground_assets/65186928_102630124366752_5195599836069494784_n-200w.jpg"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profile" className="home-navlink2">
              <div className="home-container17">
                <MemberDetails
                  heading1="SK Sta. Barbara"
                  image_src="/playground_assets/306771529_424340226506993_7629717288530228849_n-200h.jpg"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profile" className="home-navlink3">
              <div className="home-container18">
                <MemberDetails
                  heading1="Velasco Cup"
                  image_src="/playground_assets/279968054_5506314706058920_6153984820332103612_n1-200h.jpg"
                ></MemberDetails>
              </div>
            </Link>
            <Link to="/profile" className="home-navlink4">
              <div className="home-container19">
                <MemberDetails
                  heading1="PSU BISKËG 2023"
                  image_src="/playground_assets/345858878_632233328329084_825885773888243665_n-200h.jpg"
                ></MemberDetails>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <div className="home-container20">
          <h6 className="home-text34 TextSM">ON THE COASTLINE</h6>
          <h3 className="home-text35 Healine">OPEN LEAGUE REGISTRATION</h3>
          <span className="home-text36">
            <span>
              Registration for team entries is now open until June 30. Secure
              your spot by registering your team today and get ready to showcase
              your skills in thrilling battles!
            </span>
            <br></br>
            <span>
              To ensure the smooth organization of the tournament, there is a
              registration fee of 500. This fee helps cover the operational
              costs and ensures a high-quality experience for all participants.
              Payments can be made securely through GCASH, one of our
              coordinators will contact you to proceed with your registration
            </span>
            <br></br>
            <br></br>
          </span>
        
          <div className="home-contact">
          {submitted ?
            <div className="home-form">
              <h1 className="home-text42">SIGN YOUR TEAM</h1>
              <span className="home-text43 TextXL">
                Complete this form and we will get back to you in 24 hours.
              </span>
              <span className="home-text44 TextXS">FULL NAME</span>
              <input
                value = {fullname}
                onChange={(e) => setfullname(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="home-textinput TextSM input"
              />
              <span className="home-text45 TextXS">PHONE NUMBER</span>
              <input
                
                value ={phonenumber}
                onChange={(e) => setphonenumber(e.target.value)}
                type="text"
                placeholder="Phone Number"
                className="home-textinput1 TextSM input"
              />
              <span className="home-text46 TextXS">MESSAGE</span>
              <textarea
                cols="80"
                rows="4"
                value={message}
                onChange = {(e)  => setmessage(e.target.value)}
                placeholder="Type a mesasage"
                className="home-textarea TextSM textarea"
              ></textarea>
              <div className="home-container21">
                <SecondaryButton
                onClick = {sendEmail}
                  button="Send message"
                  rootClassName="secondary-button-root-class-name"
                ></SecondaryButton>
              </div>
            </div>
               :
               <div className='home-form defaulttext'>
                 <h2  >Sign up complete!</h2>
                 <p>We have received your registration request, one of our coordinators will be contacting you within 24 hours</p>
               </div>
             }
          </div>
       
        </div>
        
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="home-image5"
        />
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
