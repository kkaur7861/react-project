import { useEffect, useState } from 'react'
import './App.css'
import Counter from './components/Counter'
import PasswordGen from './components/PasswordGen'
import customHooks from './hooks/customHook'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'
import { ThemeProvider } from './context/theme'
import ThemeBtn from './components/themeComponents/themeBtn'
import Card from './components/themeComponents/Card'

function Store() {
  const [bgColor, setBgColor] = useState('olive')
  const currencyInfo = customHooks("from");
  const [themeMode, setThemeMode] = useState('light');
  const darkTheme = () => {
    setThemeMode((pre) => {
      return pre === 'light' ? "dark" : "light";
    })
  }

  useEffect(() => {
    document.querySelector('html')?.classList.remove('light', 'dark')
    document.querySelector('html')?.classList.add(themeMode)
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
    // <UserContextProvider>
    //   <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
    //   <Login/>
    //   <Profile/>
    //   </div>
    // </UserContextProvider>
    // <div className='w-full h-screen' style={{backgroundColor:bgColor}}>
    //   <PasswordGen/>
    //   {/* <Counter></Counter> */}
    //   {/* <LandingPage></LandingPage> */}
    // </div>
  )
}

export default Store
