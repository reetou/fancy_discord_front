import React from 'react'

import styled from "styled-components";
import QuestionAnswer from "../QuestionAnswer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Questions = () => (
  <Container>
    <QuestionAnswer
      question="How to sign in?"
      answer="Press Sign In button on top of the page and you will be redirected to Discord official page to confirm sign in. After that you will be able to create your app on My Apps page"
    />
    <QuestionAnswer
      question="Is it free?"
      answer="It's absolutely free for the alpha stage. Notice though that your deployment will be destroyed every once in a while and you have to deploy it again. It's done for economy purposes since we are low on resources right now."
    />
    <QuestionAnswer
      question="Bot logs?"
      answer="We are working on it and it will be available soon."
    />
    <QuestionAnswer
      question="Can I host many bots?"
      answer="Currently you can host only one bot per account."
    />
    <QuestionAnswer
      question="Where will my bot be hosted geographically?"
      answer="Frankfurt, Moscow or San-Francisco, depending on available resources"
    />
    <QuestionAnswer
      question="Resource limits?"
      answer="At the time we limit deployment's resources to 0.2vCPU and 200 mb RAM. It should be fine for general-purpose bot. We can adjust it though if we see it's not enough"
    />
  </Container>
)

export default Questions
