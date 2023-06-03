import React, { useState } from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton from '../components/secondary-button'
import Footer from '../components/footer'
import './blog-post.css'
import emailjs from '@emailjs/browser'

const BlogPost = (props) => {

  const [fullname, setfullname] = useState('')
  const [phonenumber, setphonenumber] = useState('')
  const [message, setmessage] = useState('')
  const [fromemail] = useState('sayhello@gmail.com');
  const [customeremail, setcustomeremail] = useState('');
  const [submitted, setsubmitted] = useState(true)
  

  const sendEmail = async(e) => {
    e.preventDefault();
    
    try {
      if(fullname || phonenumber ){
        emailjs.send('service_je6at7j', 'template_33ly7jh', {
          from_name: fullname,
          to_email: 'sayhello@vidarsson.online',
          phonenumber: phonenumber,
          message: "application for the tournament: \n\n " + customeremail + "\n\n" + message,
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
    <div className="blog-post-container">
      <Helmet>
        <title>Open League - 10/10</title>
        <meta property="og:title" content="Open League - 10/10" />
      </Helmet>
      <div className="blog-post-hero">
        <div className="blog-post-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <div className="blog-post-bg"></div>
        <h1 className="blog-post-text">
          <span>BE OUR SPONSOR OR SUPPORT OPEN LEAGUE</span>
          <br></br>
        </h1>
      </div>
      <div className="blog-post-posts">
        <div className="blog-post-container1">
          <h3 className="blog-post-text03 Healine"> @wethe1010</h3>
          <span className="blog-post-text04">
            <span className="TextXL">
              Our goal is to host a prestigious open league for Mobile Legends:
              Bang Bang (MLBB) each year, setting new standards for excellence
              and excitement in the esports community. We strive to create an
              immersive and inclusive competitive environment where aspiring
              players, teams, and fans can come together to showcase their
              skills, witness thrilling battles, and celebrate the spirit of
              MLBB.
            </span>
            <br className="TextXL"></br>
            <br className="TextXL"></br>
            <span className="TextXL">
              Our primary objective is to foster the growth of the MLBB esports
              scene by providing a platform for aspiring talents to shine.
              Through our annual open league, we aim to discover and nurture the
              next generation of MLBB stars, offering them a stage to
              demonstrate their abilities and elevate their professional
              careers. By consistently organizing this league, we aim to
              contribute to the development and sustainability of the MLBB
              esports ecosystem.
            </span>
            <br className="blog-post-text09"></br>
            <br className="TextXL"></br>
            <span className="TextXL">
              Additionally, we are committed to promoting community engagement
              and fan involvement. Our open league serves as a gathering point
              for enthusiasts of MLBB, bringing together players, teams, and
              fans from all walks of life. We aim to create an electrifying
              atmosphere where passionate supporters can cheer for their
              favorite teams, celebrate remarkable plays, and form lasting
              connections within the MLBB community.
            </span>
            <br className="blog-post-text12"></br>
            <br className="TextXL"></br>
            <br className="blog-post-text14"></br>
            <br className="TextXL"></br>
          </span>
        </div>
        <div className="blog-post-form">
          <h1 className="blog-post-text16">
            <span>LEARN MORE ABOUT OPEN LEAGUE</span>
            <br></br>
          </h1>
          <span className="blog-post-text19">
            <span className="TextXL">
              One of our coordinators will reach you within 24 hours.
            </span>
            <br></br>
            <br></br>
          </span>
          <span className="blog-post-text23 TextXS">FULL NAME</span>
          <input
            value={fullname}
            onChange={(e) => setfullname(e.target.value)}
            type="text"
            placeholder="Full Name"
            className="blog-post-textinput input TextSM"
          />
          <span className="blog-post-text24 TextXS">EMAIL</span>
          <input
            value = {customeremail}
            onChange={(e) => setcustomeremail(e.target.value)}
            type="text"
            placeholder="Email Address"
            className="blog-post-textinput1 TextSM input"
          />
          <span className="blog-post-text25 TextXS">PHONE NUMBER</span>
          <input
            value = {phonenumber}
            onChange={(e) => setphonenumber(e.target.value)}
            type="text"
            placeholder="Email"
            className="blog-post-textinput2 input TextSM"
          />
          <span className="blog-post-text26 TextXS">MESSAGE</span>
          <textarea
            value = {message}
            onChange={(e) => setmessage(e.target.value)}
            cols="80"
            rows="4"
            placeholder="Type a message"
            className="blog-post-textarea textarea TextSM"
          ></textarea>
          <div className="blog-post-container2">
            <SecondaryButton
              onClick = {sendEmail}
              button="Send message"
              rootClassName="secondary-button-root-class-name2"
            ></SecondaryButton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPost
