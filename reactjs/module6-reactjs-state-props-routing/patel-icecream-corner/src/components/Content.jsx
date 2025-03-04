import React from 'react'
import product1 from '../assets/images/banner-pink-cone.png'
import product2 from '../assets/images/milkshake.png'
import about from '../assets/images/about-img-section.png'
export default function Content() {
  return (
    <section className='container p-5 mt-16'>

    <h1 className='text-center  text-pink-400 text-5xl'>100% Naturals</h1>
    <h1 className='text-center text-7xl font-extrabold text-pink-500 mt-4'>Products</h1>  
    {/* products cards */}

    <div className='w-full flex flex-row'>
    
    <div className='card w-1/2 ms-10 bg-gray-100 p-20 position-relative mt-24'>
      <img src={product1} alt='' className='rounded-full w-64 h-64  mx-auto object-cover icecream-rounded' />
      <h2 className='text-center text-5xl mt-4'>Icecream</h2>
      <h3 className='text-center text-4xl'><span className='bi bi-three-dots'></span></h3>
      <p className='justify-items-center text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
      
    </div>

    <div className='card w-1/2 ms-10 bg-gray-100 p-20 position-relative mt-24'>
      <img src={product1} alt='' className='rounded-full w-64 h-64  mx-auto object-cover icecream-rounded' />
      <h2 className='text-center text-5xl mt-4'>Icecream</h2>
      <h3 className='text-center text-4xl'><span className='bi bi-three-dots'></span></h3>
      <p className='justify-items-center text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
      
    </div>

    <div className='card w-1/2 ms-10 bg-gray-100 p-20 position-relative mt-24'>
      <img src={product1} alt='' className='rounded-full w-64 h-64  mx-auto object-cover icecream-rounded' />
      <h2 className='text-center text-5xl mt-4'>Icecream</h2>
      <h3 className='text-center text-4xl'><span className='bi bi-three-dots'></span></h3>
      <p className='justify-items-center text-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>
    </div>

    </div>
    
    {/* tradition & love sections */}

    <h1 className='text-center  text-pink-400 text-4xl mt-16'>Tradition & Love</h1>
    <h1 className='text-center text-7xl font-extrabold text-pink-500 mt-4'>How It's Made</h1>  

    <div className='container   flex flex-row'>
    <div className='w-1/2'>
      <img src={product2} alt='milkshake' className='w-max mx-auto mt-24' />
    </div>
    <div className='w-1/2 p-16 mt-24'>
    <p className='justify-items-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>

    <p className='justify-items-center'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer </p>

    
    <button className='text-xl rounded-2xl bg-amber-600 p-3 w-50 ms-10 mt-10 text-white' type='button'>How it Made <span className='bi bi-caret-right'></span></button>
    </div>
    </div>


    {/* grid gallery */}
    <div className='container'>
      <img src={about} alt='about' />
    </div>

    {/* caursels for testimonials */}
    
    <h1 className='text-center  text-pink-400 text-5xl mt-16'>Testimonials</h1>
    <h1 className='text-center text-7xl font-extrabold text-pink-500 mt-4'>Our Testimonials</h1>  
    <div className='container p-16 mt-16'>

    </div>
    </section>
  )
}
