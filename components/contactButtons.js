import styled from 'styled-components'

import { FaEnvelope, FaGithub, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'


function ContactButtons({ size }) {
  const buttonSize = size * 0.7 / 5

  return <ButtonsContainer size={size}>
    <li>
      <a href="mailto:plucas.cer@gmail.com">
        <FaEnvelope color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="https://github.com/paulo-lucas">
        <FaGithub color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="https://twitter.com/plucasdev">
        <FaTwitter color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="https://www.instagram.com/paulo_lucasoc">
        <FaInstagram color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="https://www.linkedin.com/in/paulo-lucas-cerqueira/">
        <FaLinkedin color="white" size={buttonSize} />
      </a>
    </li>

  </ButtonsContainer>
}

const ButtonsContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: ${props => props.size}px;
`

export default ContactButtons