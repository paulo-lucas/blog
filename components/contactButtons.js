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
      <a href="">
        <FaGithub color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="">
        <FaTwitter color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="">
        <FaInstagram color="white" size={buttonSize} />
      </a>
    </li>

    <li>
      <a href="">
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