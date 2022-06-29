import styled from "@emotion/styled";
import start from '../../images/icon-star.svg'
import illustration from '../../images/illustration-thank-you.svg'

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  aling-items: center;
`

const SecondaryContainer = styled.div `
  width: 100%;
  max-width: 500px;
  height: auto;
  padding: 20px;
  background-color: var(--blue);
  border-radius: 12px;
`

const Title = styled.h1 `
  margin-top: 20px;
  text-align: ${props => props.score ? 'center': 'left'};
  font-size: 1.6rem;
  color: var(--white);
`

const Text = styled.p `
  margin-top: 12px;
  text-align: ${props => props.score ? 'center': 'left'};
  font-size: 1.4rem;
  line-height: 2.4rem;
  color: var(--grey);
`

const InputContainer = styled.div `
  width: 100%;
  height: auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

const InputButton = styled.input `
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--white);
  border: none;
  color: var(--grey);
  font-family: inherit;

  :hover {
    background-color: var(--light-grey);
    color: var(--white);
  }

  :focus {
    background-color: var(--orange);
    color: var(--white);
  }
`

const Button = styled.button `
  width: 100%;
  height: 40px;
  margin-top: 20px;
  background-color: var(--orange);
  border-radius: 20px;
  border: none;
  color: var(--white);
  font-family: inherit;
  letter-spacing: 0.2rem;

  :hover {
    transform: scale(1.02);
  }
`

const Score = styled.span `
  width: 140px;
  height: 32px;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background-color: var(--white);
  font-size: 1.2rem;
  font-family: inherit;
  color: var(--orange);
`

const Start = styled.image`
  width: 28px;
  height: 28px;
  display: flex;
  background-color: var(--white);
  border-radius: 50%;
  background-image: url(${start});
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
`
const Illustration = styled.span `
  width: 160px;
  height: 100px;
  margin: 0 auto;
  display: flex;
  background-image: url(${illustration});
  background-position: center;
  background-size: cover;
`

export {Container, SecondaryContainer, Title, Text, InputContainer, InputButton, Button, Score, Start, Illustration}