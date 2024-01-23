import React, { useState } from 'react';
//import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";

const Contact=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState('Select');
  
    const handleDropdown = () => setIsOpen(!isOpen);
    const handleSelect = (option) => {
      setSelected(option);
      setIsOpen(false);
    }
  return (
    <>
    
    <div className="flex justify-center">
    {/*<ShimmerSimpleGallery imageType="circular" imageHeight={50} caption />
    <ShimmerSimpleGallery card imageHeight={50} />
  <ShimmerSimpleGallery card imageHeight={50} caption />*/}

{/* <Accordion>
    <AccordionItem>
        <AccordionHeader>
            <h3 className={`accordion-title`}>Title 1</h3>
        </AccordionHeader>

        <AccordionBody>
            <div className="accordion-body">
                <AccordionItem>
                    <AccordionHeader>
                        <h3 className={`accordion-title`}>Title 1</h3>
                    </AccordionHeader>

                    <AccordionBody>
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet.
                        </div>
                    </AccordionBody>
                </AccordionItem>
            </div>
        </AccordionBody>
    </AccordionItem>
</Accordion> */}



    <div className="flex justify-center items-center h-full w-[50%] bg-red-300">
      <div className="text-center p-10 bg-red-500 rounded-lg shadow-lg m-10">
        <h1 className="text-3xl font-semibold text-white mb-5">Join Our newsletter</h1>
        <p className="text-white mb-5">Subscribe to our newsletter and we will provide with the accessories</p>
        <input
          type="text"
          placeholder="Enter your email"
          className="w-full p-2 mb-4 text-grey-darker"
          aria-label="Enter your email"
        />
        <button
          className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Subscribe
        </button>
      </div>
    </div>
    
    <div className="bg-gray-900 text-white p-10">
      <header className="mb-10">
        <h1 className="text-6xl font-bold mb-4">Warriors's Group Work Application</h1>
        <p className="text-lg mb-6">The official web-app for Warriors' Group LLC</p>
        <p className="mb-6">
          Warriors Group Work Application, built with Next.js, Tailwind CSS, and Firebase FormSubmit,
          simplifies employee work hour tracking and form submissions. The user-friendly interface allows
          easy data submission, enhanced by SendGrid API integration for efficient mass emails. The clean
          UI ensures a seamless experience, while the admin dashboard provides graphical insights into
          form data. This powerful tool exemplifies streamlined communication and data management,
          showcasing the developer's proficiency in cutting-edge web technologies
        </p>
        <div className="flex justify-start">
          <span className="bg-gray-700 p-2 m-1 rounded-full">NEXT JS</span>
          <span className="bg-gray-700 p-2 m-1 rounded">TAILWIND CSS</span>
          <span className="bg-gray-700 p-2 m-1 rounded">TYPESCRIPT</span>
          <span className="bg-gray-700 p-2 m-1 rounded">FIREBASE</span>
          <span className="bg-gray-700 p-2 m-1 rounded">FORMSUBMIT</span>
          <span className="bg-gray-700 p-2 m-1 rounded">SENDGRID</span>
        </div>
      </header>
      <footer className="text-center text-sm mt-10">
        <p>Live link unavailable as this is an organization application</p>
      </footer>
    </div>
    </div>
    <div className="min-h-full bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Welcome!
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            To the thapa technical website for programmers.
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <input
                id="confirm-password"
                name="confirm-password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Registration
            </button>
          </div>
        </form>
        <div className="text-sm text-center">
          Want to register using Gmail?
        </div>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
          </div>
        </div>
        <div className="text-sm text-center">
          Already have an account? <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Sign In now</a>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center h-full w-full bg-gray-100 p-10">
      <div className="flex flex-wrap bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full mx-auto">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold mb-6">Welcome!</h1>
          <p className="text-gray-700 mb-8">To the thapa technical website for programmers.</p>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              NAME
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="name" 
              type="text" 
              placeholder="Name" 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              EMAIL
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="email" 
              type="email" 
              placeholder="Email" 
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              PASSWORD
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
              id="password" 
              type="password" 
              placeholder="Password" 
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
              PASSWORD
            </label>
            <input 
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="confirm-password" 
              type="password" 
              placeholder="Confirm Password" 
            />
          </div>

          <div className="mb-6">
            <button 
              className="bg-brown-500 hover:bg-brown-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
              type="button"
            >
              REGISTRATION
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm">Want to register using Gmail?</p>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Already have an account? Sign In now
            </a>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2" aria-hidden="true">
          <div style={{ backgroundImage: `url(https://via.placeholder.com/500)` }} className="h-full bg-cover"></div>
        </div>
      </div>
    </div>
    <div className="min-h-full flex flex-row">
      <div className="w-1/2 bg-purple-800 text-white flex flex-col justify-center items-start p-12">
        <div className="mb-4">
          <img src="#" alt="Envato logo" className="mb-4" />
          <h1 className="text-6xl font-bold">Hello World.</h1>
        </div>
        <p className="mb-4">
          Epsun factorial non deposit quid pro quo hic escorol. Olypian quarrels et gorilla congolium.
        </p>
        <div className="mt-4">
          <p className="mb-2">Login with social media</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-2">
            <span className="fab fa-facebook-f pr-2" aria-hidden="true"></span>Facebook
          </button>
          <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded-full">
            <span className="fab fa-twitter pr-2" aria-hidden="true"></span>Login with Twitter
          </button>
        </div>
      </div>
      <div className="w-1/2 bg-white flex flex-col justify-center items-center p-12">
        <div className="w-full max-w-md">
          <div className="mb-4">
            <img src="#" alt="Envato logo" className="mb-4" />
            <h2 className="text-5xl font-bold">Login</h2>
            <p className="text-gray-600">Don't have an account? <a href="#" className="text-purple-800">Create your account</a>, it takes less than a minute</p>
          </div>
          <form className="bg-white">
            <div className="mb-4">
              <label className="block mb-2" for="username">User name</label>
              <input type="text" id="username" name="username" placeholder="Username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight" />
            </div>
            <div className="mb-4">
              <label className="block mb-2" for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="********"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"/>
            </div>
            <div className="flex items-center justify-between">
              <div className="inline-block">
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox" />
                  <span className="ml-2">Remember Me</span>
                </label>
              </div>
              <div className="inline-block">
                <a href="#" className="inline-block align-baseline font-bold text-sm text-purple-800 hover:text-purple-600">
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="flex flex-col justify-center items-center h-full bg-teal-100 p-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-purple-600 mb-5">Dropdown</h1>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm mb-2">Enabled</label>
          <div>
            <button 
              className="w-full text-left inline-flex justify-between items-center bg-gray-200 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
              onClick={handleDropdown} aria-haspopup="true" aria-expanded={isOpen}
            >
              {selected}
              <span className="ml-2">&#x25BC;</span>
            </button>
            {isOpen && (
              <ul className=" w-[50%] bg-white border-gray-300 border rounded shadow-lg z-10">
                {['Action', 'Another Action', 'Action 3', 'Action 4'].map((option, index) => (
                  <li key={index}
                    className="py-2 px-3 hover:bg-gray-100 cursor-pointer"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-gray-700 text-sm mb-2">Hover</label>
          <div onMouseLeave={() => setIsOpen(false)}>
            <button 
              className="w-full text-left inline-flex justify-between items-center bg-gray-200 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
              onMouseEnter={handleDropdown} aria-haspopup="true" aria-expanded={isOpen}
            >
              Select
              <span className="ml-2">&#x25BC;</span>
            </button>
            {isOpen && (
              <ul className="absolute w-full bg-white border-gray-300 border rounded shadow-lg z-10">
                {['Action', 'Another Action', 'Action 3', 'Action 4'].map((option, index) => (
                  <li key={index}
                    className={`${option === selected ? 'bg-gray-200' : ''} py-2 px-3 hover:bg-gray-100 cursor-pointer`}
                    onMouseEnter={() => setSelected(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 text-sm mb-2">Selected: {selected}</label>
          <button 
            className="w-full text-left inline-flex justify-between items-center bg-gray-200 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
            onClick={handleDropdown} aria-haspopup="true" aria-expanded={isOpen}
          >
            {selected}
            <span className="ml-2">&#x25BC;</span>
          </button>
        </div>
      </div>
    </div>
</>

  );
}
export default Contact;