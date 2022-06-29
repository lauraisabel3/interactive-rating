import React, { useState } from "react";
import {Container, SecondaryContainer, Title, Text, InputContainer, InputButton, Button, Score, Start, Illustration} from './style'



const Main = () => {
  const[sent, setSent] = useState(false);
  const[score, setScore] = useState('');

  const handleClick = () => {
    setSent(!sent)
  }

  return (
    <Container>
      {sent === false && 
      <SecondaryContainer>
        <Start></Start>
        <Title> How did we do?</Title>
        <Text>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Text>
        <InputContainer>
          <InputButton
            value="1"
            type="button"
            onClick={(e) => setScore(e.target.value)}
          />
          <InputButton
            value="2"
            type="button"
            onClick={(e) => setScore(e.target.value)}
          />
          <InputButton
            value="3"
            type="button"
            onClick={(e) => setScore(e.target.value)}
          />
          <InputButton
            value="4"
            type="button"
            onClick={(e) => setScore(e.target.value)}
          />
          <InputButton
            value="5"
            type="button"
            onClick={(e) => setScore(e.target.value)}
          />
        </InputContainer>
        <Button onClick={handleClick}>SUBMIT</Button>
      </SecondaryContainer>
      }
      {sent === true &&
      <SecondaryContainer>
        <Illustration></Illustration>
        <Score>You selected {score} out of 5</Score>
        <Title score={score}>Thank you!</Title>
        <Text score={score}>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</Text>
      </SecondaryContainer>
      }
    </Container>
  )
}

export default Main