import React from 'react'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'
export default function AddSubCategory() {
return (
    <>
    <AdminHeader />
     {/* sidebar and dashboard display flex */}
     <div className='flex flex-row'>
      {/* sidebar */}
      <div className='w-1/3 h-full'>
        <AdminSidebar />
      </div>
      {/* dashboard */}
    <div className='w-full p-16'>
    <h1 className='text-4xl text-pink-600 ms-0'>Add SubCategory</h1>
    <hr className='border border-2 border-pink-600 w-20' />

    <div className='form-group mt-5'>
            <select type='text' placeholder='Enter SubCategory Name *' className='form-control p-3 border border-2 border-pink-600 w-128'>
                <option value="">-select category-</option>
            </select>
        </div>

        <div className='form-group mt-5'>
            <input type='text' placeholder='Enter SubCategory Name *' className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>
        
        <div className='form-group mt-5'>
            <input type='text' placeholder='SubCategory decsriptions *' className='form-control p-3 border border-2 border-pink-600 w-128' />
        </div>

        
        <div className='form-group mt-5'>
            <input type='submit' value="Add SubCategory" className='form-control p-3 bg-black text-white w-128' />
           
        </div>
    

    </div>

    </div>

    </>
  )
}
