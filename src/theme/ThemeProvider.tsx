import { useMemo, useState } from 'react'
import { FC } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme } from './ThemeContext'
import { ThemeContext } from './ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState <Theme> (defaultTheme)
   
   const defaultProps = useMemo(()=> 
    ({
        theme:theme,
        setTheme:setTheme,
    })
   ,[theme])

  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  )
}

export default ThemeProvider
