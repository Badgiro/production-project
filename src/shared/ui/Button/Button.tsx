import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

interface ButtonProps {
  className?: string
}

export const Button = ({ className }: ButtonProps) => {
  return (
    <div className={classNames(cls.Button, {}, [className])}>
    </div>
  )
}