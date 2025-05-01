import React,{useContext} from 'react'
// useContext : access context values without using ,<consumer> there we can used useContext
const ThemeContext=React.createContext('light');

function ThemeButton()
{
  const theme=useContext(ThemeContext);
  return <button className='theme'>I am {theme} access themed with context hooks</button>
}
export default ThemeButton
