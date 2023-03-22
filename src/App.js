import './App.css';
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
const portfolioName = "Anthony Nino De Guzman"


export function Header() {
	return (
		<header>
		<p>{portfolioName}</p>
		<nav className="tabs">
			<Link className='tab' to="/">Home</Link>
      		<Link className='tab' to="/projects">Projects</Link>
			<Link className='tab' to="/contacts">Contacts</Link>
			<Link className='tab' to="/blog">Blog</Link>	
		</nav>
	</header>
	);
}


export function Home() {

  return (
    <article className='ABOUT'>

		<h1 className='title'>
			Front-End Web Developer
		</h1>

		<section className='left'>
			<div className='aboutDetail'>
				<h1 className='underline'>My Skills</h1>
				<p style={{textAlign:'left'}}>
				HTML, JavaScript, React, CSS, and SQL.
				<br/>
				Bachelors of Science Degree in Computer Science
				<br/> 
				Mathematics Minor at Queens College
				<br/>
				Practice in Graphic Designs for Fliers, Logos, and etc.
				</p>
			</div>
			<div className='slideshow' onLoad={(e)=>{
				e.target.className='slideshowImages3';
			}}>
			<img className='slideshowImages' width="100%" src={require("./images/slideshow/skills/1.webp")} alt='hobbies is here'/>
			<img className='slideshowImages' width="100%" src={require("./images/slideshow/skills/2.webp")} alt='hobbies is here'/>
			<img className='slideshowImages' width="100%" src={require("./images/slideshow/skills/3.webp")} alt='hobbies is here'/>
			</div>
		</section>

		<section className='right'>
			<div className='slideshow' onLoad={(e)=>{
				e.target.className='slideshowImages3';
				}}>
			<img className='slideshowImages' width="100%" src={require("./images/slideshow/team/teamwork.webp")} alt='hobbies is here'/>
			<img className='slideshowImages' width="100%" src={require("./images/slideshow/team/fun.webp")} alt='hobbies is here'/>
			<img className='slideshowImages' width="100%" src={require("./images/slideshow/team/dance.webp")} alt='hobbies is here'/>
			</div>
			<div className='aboutDetail'>
				<h1 className='underline'>My Ambitions</h1>
				<p>
				My ambitions are to create a positive impact
				for companies and develop relationships with 
				teamworkers and consumers. I hold dear to this 
				as it creates a stable, consistent, and fun work environment. 
				I expect to collaborate with  members of my team to create 
				innovative ideas on bringing success to our business.
				</p>
			</div>
		</section>

		<section className='left'>
			<div className='aboutDetail'>
				<h1 className='underline'>My Hobbies</h1>
				<p>
				Outside of coding, I enjoy my time playing Video Games, socializing with others, and playing sports.
				The sports I fond with the most are Martial Arts, Tennis, and Soccer. 
				My favorite food to eat is the authentic ramens found in restaurants 
				and my favorite fruits are watermelons!
				</p>
			</div>
			<img width="100%" src={require("./images/games.webp")} alt='hobbies is here'/>
		</section>
	</article>
  );
}

export function Projects(){
	return (
		<article className="PROJECTS">
			<h1 className='title'>My Projects</h1>
			<section className='projectCollection'>
				<section className='aProject'>
					<a href='https://anthonyndg.github.io/avi-react'>
					<img src={require("./images/AviBlogsIcon.webp")} alt='Project here' />
					<h3>Avigail Castro's Blog</h3>
					<p>March 2023</p>
					</a>
				</section>
				<section className='aProject'>
					<a href='https://kog64.com'>
					<img src={require("./images/website.webp")} alt='Project here' />
					<h3>Kog64 Content Creation Site</h3>
					<p>August 2022</p>
					</a>
				</section>
			</section>
		</article>
	);
}

export function Contacts(){
	const [emailInput, setEmailInput] = useState('');
	const [textInput, setTextInput] = useState('');
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_f40zh9a', 'template_8ldj1wd', form.current, '47cX3gl1EHpgqYnxp')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  alert("Your message has been sent!");
		  setEmailInput('');
		  setTextInput('');
	  };

	return(
		<article>
			<h1 className='title'>My Information</h1>
			<div className="CONTACTS fade">
				<section>
					<section className='contactPanel'>
						<a href='https://www.linkedin.com/in/anthony-ndg/'> <img width="60%" src={require("./images/LinkedIn.webp")} alt='LinkedIn Image is here'/> </a>
						<h2>LinkedIn</h2>
					</section>

					<section className='contactPanel'>
						<a href='https://www.instagram.com/koggers64/'>	<img width="60%" src={require("./images/Instagram.webp")} alt='Instagram Image is here'/></a>
						<h2>Instagram</h2>
					</section>

					<section className='contactPanel'>
						<a href='https://www.facebook.com/Anthony.KoG'><img  width="60%" src={require("./images/Facebook.webp")} alt='Facebook Image is here'/></a>
						<h2>Facebook</h2>
					</section>

				</section>
				
				<h3 style={{margin:'0 10% 20px 10%'}}>Want to reach to me directly? Feel free to write here to send an email. I always check my emails so I'll be sure to reply right away!</h3>
			<form ref={form} onSubmit={sendEmail}>
				<label><strong>Email: </strong></label>
				<br/>
				<input value={emailInput} onChange={(event)=> setEmailInput(event.target.value)} className='emailInput' placeholder='example@email.com' style={{fontSize:'20px',width:'50%', height:'22px',marginBottom:'10px'}} type="email" name="user_email"/>
				<br/>
				<label><strong>Message: </strong></label>
				<br/>
				<textarea value={textInput} onChange={(event) => setTextInput(event.target.value)} className='emailInput' style={{fontSize:'20px',width:'50%', height:'150px',resize:'none'}} placeholder='This Email System is supported by EmailJS! Please write your message here.' name='message'/>
				<br/>
				<button type='submit' className='emailButton'>Submit</button>
			</form>
			</div>
			
		</article>
	);
}

export function Blog(){ //Each section will be a blog post that is grabbed from google spreadsheet api
	const [data,setData] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

    useEffect(() => {
		setLoading(true);
		fetch(
			"https://sheets.googleapis.com/v4/spreadsheets/1cqwa8PnGLJBqmSS9Qce0ZVC414RlcwUoIiL58XY1BlE/values/Sheet1?alt=json&key=AIzaSyDCcqhhN89QIKDBqYmgQedsszRwKPwqdEg"
		).then(function(response){ return response.json();
		})
		.then(setData)
		.then(() => setLoading(false))
      	.catch(setError)
	}, []);

	if(loading) return <article>Loading Blogs...</article>;
    if(error) return <article>An Error has occured when loading blogs. Please try again</article>
    if(!data) return null;

		return (
			<article className='BLOGS'>
				<h1 className='title'>My Blog</h1>
				{data.values.slice(1).reverse().map( (text, index) => (
					<section key={index} className='blogPost pop'>
					<img className='blogPfp' src='https://media.licdn.com/dms/image/D4E03AQG-b9OwbehNOw/profile-displayphoto-shrink_800_800/0/1675554118692?e=1683158400&v=beta&t=8C6YWRY3fxaWbSjmXCNnNDKYnKsw1bsscCHuvjxMyog' alt='pfp sample'/>
					<section className='blogText' style={{textAlign:"left"}} >
					<h2 className='underline' style={{margin:'0'}}>{portfolioName}</h2>
					<sub>{text[1]}</sub>
						<h3>{text[0]}</h3>
					</section>
					</section>
					
				))}
			</article>
		)	
}

export function Resume(){
	return (
		<article className='BLOGS'>
			<h1 className='title'>Resume</h1>
		</article>
	)
}