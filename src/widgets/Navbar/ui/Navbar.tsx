import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { Link } from 'react-router-dom'
import cls from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar)}>
      <div className={classNames(cls.links)}>
        <AppLink className={classNames(cls.mainLink)} to="/">
          Main
        </AppLink>

        <AppLink to="/about">About</AppLink>
      </div>
    </div>
  )
}
