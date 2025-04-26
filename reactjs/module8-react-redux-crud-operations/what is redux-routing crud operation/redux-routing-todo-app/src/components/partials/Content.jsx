import React from 'react'
import { Link, Links } from 'react-router-dom'
export default function Content() {
return (
<div className='bg-white w-50 mx-auto p-5'>
<h1 className='fs-3'>React redux @reactjs-toolkit todo/counter App</h1>
<p className='fs-3'>Why should I use Redux toolkit?</p>

Redux is state management library that allow you to manage state in any front-end framework, and Redux Toolkit makes it easier to write good Redux applications and speeds up development, by baking in our recommended best practices, providing good default behaviors, catching mistakes, and allowing you to write simpler code.

<p className='fs-5'>Steps:</p>

Run below mentioned command ,remove unnecessary codes and files like React Logo and test your app.
<p className='fs-5'>
npx create-react-app React-Redux-Toolkit-TODOAPP
cd React-Redux-Toolkit-TODOAPP
npm start</p>
<p className='fs-5'>
2. Install Required packages.

npm install @reduxjs/toolkit react-redux react-icons

@reduxjs/toolkit react-redux: Redux and Redux toolkit library.

react-icons: Include popular icons in your React projects easily with react-icons, which utilizes ES6 imports that allows you to include only the icons that your project is using.</p>
<p className='fs-5'>
3. Create a file named src/store.js. Import the configureStore API from Redux Toolkit. We'll start by creating an empty Redux store, and exporting it.</p>
</div>
)
}
