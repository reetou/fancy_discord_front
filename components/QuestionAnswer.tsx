import React from 'react'

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`

const Question = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const Answer = styled.div`
  margin: 1rem 0;
  font-size: 1rem;
`

interface Props {
  question: string;
  answer: string;
}

const QuestionAnswer = (props: Props) => (
  <Container>
    <Question>{props.question}</Question>
    <Answer>{props.answer}</Answer>
  </Container>
)

export default QuestionAnswer
