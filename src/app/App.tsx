import { Routes, Route } from 'react-router-dom'
import './styles/index.scss'

import { Link } from 'react-router-dom'
import { Suspense, useContext } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'

import { Navbar } from 'widgets/Navbar/'

import AppRouter from './providers/router/ui/AppRouter'
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar'

const App = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <div className='content-page'>
        <Sidebar />
        <AppRouter />
      </div>

      
    </div>
  )
}

export default App
