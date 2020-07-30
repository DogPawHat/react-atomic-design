import React, { ReactNode, ReactEventHandler } from "react"
import styled, { css } from "styled-components"

export enum ButtonType {
  BUTTON = "button",
  RESET = "reset",
  SUBMIT = "submit",
}

export enum ButtonTheme {
  DEFAULT = "default",
  ROUNDED = "rounded",
}

export enum ButtonSize {
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
}

type Props = {
  type?: ButtonType
  localTheme?: ButtonTheme
  size?: ButtonSize
  onClick?: ReactEventHandler<HTMLButtonElement>
  children?: ReactNode
  className?: string
  disabled?: boolean
}

const BaseButton = ({
  type = ButtonType.BUTTON,
  onClick = () => {},
  className = "",
  disabled = false,
  children,
}: Props) => (
  <button type={type} onClick={onClick} disabled={disabled} className={className}>
    {children}
  </button>
)

const Button = styled(BaseButton)`
  @import "../../_settings/_variables.css";

  ${({ size = ButtonSize.MEDIUM, localTheme = ButtonTheme.DEFAULT, disabled = false }) => css`
    -webkit-appearance: none;
    border: 0;
    outline: 0;
    display: block;
    font-family: var(--base-font-family);
    font-size: 0.9em;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;
    position: relative;

    /* Size */
    ${
      size === ButtonSize.SMALL &&
      css`
        padding: 0.5em 0.6em;
      `
    }

    ${
      size === ButtonSize.MEDIUM &&
      css`
        padding: 1.1em 1.3em;
      `
    }

    ${
      size === ButtonSize.LARGE &&
      css`
        padding: 1.7em 2.4em;
      `
    }

    /* Theme */
    ${
      localTheme === ButtonTheme.DEFAULT &&
      css`
        color: #fff;
        background: var(--brand);
        border: 1px solid var(--brand);
      `
    }

    ${
      localTheme === ButtonTheme.ROUNDED &&
      css`
        color: var(--brand);
        background: #fff;
        border: 1px solid var(--brand);
        transition: color 0.3s ease, background 0.3s ease;

        &:hover {
          color: #fff;
          background: var(--brand);
        }
      `
    }

    ${
      disabled === true &&
      css`
        color: var(--grey-2);
        background: color(var(--grey-4) tint(40%));
        border-color: var(--grey-4);
        cursor: default;
      `
    }
  `}
`

export default Button
