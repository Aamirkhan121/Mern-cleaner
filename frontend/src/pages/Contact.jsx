import React from 'react'
import Accordian from '../components/Accordian'
import { FcFaq } from 'react-icons/fc'

const BASE_URL = 'https://mern-cleaner-1.onrender.com'

const Contact = () => {

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    number: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch(`${BASE_URL}/create-contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      if (response.ok) {
        alert(data.message)
        setFormData({
          name: '',
          email: '',
          number: '',
          message: ''
        })
      } else {
        alert(data.error)
      }
    } catch (error) {
      console.log(error)
      alert('An error occurred. Please try again.')
    }
  }


  return (
    <>
    <section className=" section flex justify-center items-center bg-gray300">
        <div className="text-center p-4 md:p-8 max-w-lg">
          <div className="mb-4">
            <p className="text-xl font-semibold text-blue-600">GET IN TOUCH</p>
          </div>

          <div className="mb-6">
            <h1 className="text-5xl md:text-6xl font-normal text-gray-800">Contact</h1>
          </div>

          <div className="mb-6">
            <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-gray-300 flex justify-center items-center px-8 py-16 bg-gray300">
  <div className="grid grid-cols-1  gap-8 w-full max-w-3xl p-6 rounded-[1.5rem]">
    <form className="w-full  gap-6" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-semibold">
          Name
        </label>
        <input
          className="border p-2  rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-700 font-semibold">
          Email
        </label>
        <input
          className="border p-2  rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col">
        <label htmlFor="number" className="text-gray-700 font-semibold">
          Phone Number
        </label>
        <input
          className="border p-2  rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="number"
          name="number"
          id="number"
          placeholder="Enter your phone number"
          value={formData.number}
          onChange={handleChange}
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col col-span-1 md:col-span-2">
        <label htmlFor="message" className="text-gray-700 font-semibold">
          Message
        </label>
        <textarea
          className="border p-2  rounded-[1.5rem] focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="message"
          id="message"
          cols="30"
          rows="3"
          placeholder="Write your message here..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="col-span-1 md:col-span-2 pt-4">
        <button
          type="submit"
          className="bg-blue-500 border p-2 bg-elaichi  rounded-[1.5rem] focus:outline-none   px-6 py-2 rounded-[1.5rem] hover:bg-blue-600 transition-all"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</section>

  {/* Accordian */}
  <div className='flex flex-col justify-center items-center  bg-gray300'>
  <div className="flex justify-center items-center gap-4 m-10">
  <FcFaq className='w-8 h-8'/>
    <p className="text-gray-800 font-bold flex items-center justify-center"> FAQs</p>
  </div>
  <div className="flex flex-col items-center">
    <h1 className="text-gray-600 text-center font-bold text-5xl mb-8">Have Questions?</h1>
    <p className='mb-8 max-w-[20rem] text-center'>
      We’re committed to making your experience as smooth and straightforward as possible.
    </p>
  </div>
  <div className='flex justify-center items-center w-full'>
    <div className='max-w-[40rem] w-full mb-20'>
      <Accordian />
    </div>
  </div>
</div>
    </>
  )
}

export default Contact
