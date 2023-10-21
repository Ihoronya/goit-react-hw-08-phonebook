import styled from 'styled-components';

export const Contaner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  background: #0b1a0d;
  border-radius: 10px;
    text-align: center;
    padding: 60px 20px;
  font-size: 40px;
    font-weight: bold;
    line-height: 50px;
    color: #FFF;
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    text-shadow: 0 -40px 100px, 0 0 2px, 0 0 1em #BFE2FF, 0 0 0.5em #BFE2FF, 0 0 0.1em #BFE2FF;
    animation: neon-4 linear infinite 2s;
    @keyframes neon-4 {
    78% {
        color: inherit;
        text-shadow: inherit;
    }
    79%{
        color: #0b1a0d;
    }
    80% {
        text-shadow: none;
    }
    81% {
        color: inherit;
        text-shadow: inherit;
    }
    82% {
        color: #0b1a0d;
        text-shadow: none;
    }
    83% {
        color: inherit;
        text-shadow: inherit;
    }
    92% {
        color: #0b1a0d;
        text-shadow: none;
    }
    92.5% {
        color: inherit;
        text-shadow: inherit;
    }
}
  
`;
