import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { Link } from 'react-router-dom'
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <ThemeSwitcher/>
      <div className={classNames(cls.links)}>

        <AppLink theme={AppLinkTheme.SECONDARY} className={classNames(cls.mainLink)} to="/">
          Main
        </AppLink>

        <AppLink theme={AppLinkTheme.SECONDARY} to="/about">About</AppLink>
      </div>
    </div>
  )
}
