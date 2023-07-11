import { Typography } from '../../elements/Typography'
import clsx from 'clsx'
import React, { useContext, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Button } from 'src/elements/Button'
import { ThemeContext } from 'src/pages'
import { Login } from '../Login'

interface IFormsValid {
  email: string
  password: string
}

type ModalWindowProps = {
  sign: boolean
  setSign: (isSign: boolean) => void
  login: boolean
  setLogin: (isLogin: boolean) => void
}

export const SignUp = ({ sign, setSign, login, setLogin }: ModalWindowProps) => {
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
    setSign(false)
  }

  const handleOpenRemindeWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setSign(false)
  }
  const handleOpenLoginWindow = (e: React.MouseEvent) => {
    e.preventDefault()
    setSign(false)
    setLogin(true)
  }

  return (
    <>
      <Login login={login} setLogin={setLogin} />
      <div className={clsx('modal_holder', sign ? 'show_holder' : '')} onClick={handleCloseModalWindow}></div>
      <div className={clsx('modal_window', sign ? 'show_window' : '', theme ? 'modal_window_light' : '')}>
        <div className="modal_header">
          <Typography colorVariant={theme ? 'black' : ''} component="h3" variant="h3">
            Sign Up
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
                    <p className={clsx('error_message', theme ? 'error_message_light' : '')}>
                      <i
                        className={clsx(
                          'error_icon',
                          'fa-solid',
                          'fa-triangle-exclamation',
                          theme ? 'error_icon_light' : '',
                        )}
                      ></i>
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
                  {errors?.password && (
                    <i
                      className={clsx(
                        'error_icon_password',
                        'fa-solid',
                        'fa-triangle-exclamation',
                        theme ? 'error_icon_password_light' : '',
                      )}
                    ></i>
                  )}
                  <button
                    className={clsx('password_blind', theme ? 'password_blind_light' : '')}
                    onClick={handleToggle}
                  >
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
                    Sign Up
                  </Button>
                  <Button
                    onClick={handleOpenLoginWindow}
                    component="button"
                    variant={theme ? 'blackX' : 'withoutBg'}
                    classNameStyles="button"
                    type="submit"
                  >
                    Login
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
