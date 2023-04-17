import { Typography } from '../../elements/Typography'
import clsx from 'clsx'
import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from 'src/elements/Button'
import { ThemeContext } from 'src/pages'

interface IFormsValid {
  email: string
  password: string
}

type ModalWindowProps = {
  login: boolean
  setLogin: (isLogin: boolean) => void
}

export const Login = ({ login, setLogin }: ModalWindowProps) => {
  const [type, setType] = useState('password')
  const [icon, setIcon] = useState('eye-slash')

  const { theme } = useContext(ThemeContext)

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (type === 'password') {
      setIcon('eye')
      setType('text')
    } else {
      setIcon('eye-slash')
      setType('password')
    }
  }

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<IFormsValid>({
    mode: 'onBlur',
  })

  const onSubmit: SubmitHandler<IFormsValid> = (data: IFormsValid) => {
    alert(JSON.stringify(data))
    reset()
  }

  const handleCloseModalWindow = () => {
    setLogin(false)
  }

  const handleOpenRemindeWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setLogin(false)
  }
  const handleOpenRegestrationWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setLogin(false)
  }

  return (
    <>
      <div className={clsx('modal_holder', login ? 'show_holder' : '')} onClick={handleCloseModalWindow}></div>
      <div className={clsx('modal_window', login ? 'show_window' : '', theme ? 'modal_window_light' : '')}>
        <div className="modal_header">
          <Typography colorVariant={theme ? 'black' : ''} component="h3" variant="h3">
            Login
          </Typography>
          <Button
            onClick={handleCloseModalWindow}
            component="button"
            variant={theme ? 'blackX' : 'withoutBg'}
            classNameStyles="button"
          >
            X
          </Button>
        </div>
        <div className={clsx('modal_content', theme ? 'modal_content_light' : '')}>
          <div className="auth_modal">
            <form className="auth_modal_form" onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="reset_fieldset">
                <div className="form_row">
                  <label className={clsx('form_label', theme ? 'form_label_light' : '')}>Email:</label>
                  <input
                    {...register('email', {
                      required: 'Invalid email address entered',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Enter a valid email',
                      },
                    })}
                    className={clsx('input', 'input_email', theme ? 'input_light' : '')}
                    type="email"
                    placeholder="Email:"
                  />
                  {errors?.email && (
                    <p className="error_message">
                      <i className="error_icon fa-solid fa-triangle-exclamation"></i>
                      {errors?.email?.message}
                    </p>
                  )}
                </div>

                <label className={clsx('form_label', theme ? 'form_label_light' : '')}> Password: </label>
                <div className="form_row form_row_password">
                  <input
                    {...register('password', {
                      required: true,
                    })}
                    className={clsx('input', 'input_password', theme ? 'input_light' : '')}
                    type={type}
                    placeholder="Password:"
                  />
                  {errors?.password && <i className="error_icon_password fa-solid fa-triangle-exclamation"></i>}
                  <button className="password_blind" onClick={handleToggle}>
                    <i className={`fa-solid fa-${icon}`}></i>
                  </button>
                </div>

                <div className="auth_modal_restore">
                  <input className="remember_checkbox" id="rememberMe" type="checkbox" />
                  <label
                    className={clsx('auth_modal_remember_checkbox', theme ? 'auth_modal_remember_checkbox_light' : '')}
                    htmlFor={'rememberMe'}
                  >
                    Remember me
                  </label>
                  <Button
                    onClick={handleOpenRemindeWindow}
                    component="button"
                    variant={theme ? 'blackX' : 'withoutBg'}
                    classNameStyles="button"
                  >
                    Remember password
                  </Button>
                </div>

                <div className="form_row button_center">
                  <Button
                    disabled={!isValid}
                    component="button"
                    variant={theme ? 'blackButton' : 'whiteButton'}
                    classNameStyles="button"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={handleOpenRegestrationWindow}
                    component="button"
                    variant={theme ? 'blackX' : 'withoutBg'}
                    classNameStyles="button"
                  >
                    SIGN UP
                  </Button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
