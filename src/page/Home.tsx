import { useState } from 'react';
import styled from 'styled-components';
import basicCalculator from '../util/BasicCalculator';

const Home = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState(0);

  const operators = ['+', '-', '*', '/'];

  return (
    <Wrapper>
      <input defaultValue={0} onChange={(e) => setNum1(Number(e.target.value))} />
      <input defaultValue={0} onChange={(e) => setNum2(Number(e.target.value))} />
      {operators.map((operator, idx) => (
        <Wrapper key={idx}>
          <button onClick={() => setAnswer(basicCalculator(num1, num2, operator))}>
            {operator}
          </button>
        </Wrapper>
      ))}
      <Answer>{answer}</Answer>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
`;

const Answer = styled.div`
  font-size: 2rem;
`;
