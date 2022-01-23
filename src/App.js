import React ,{useState} from 'react';
import styled from "styled-components";


const Container = styled.span`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-top: 3em;

  input[type="color"] {
    margin-right: 8px;
    -webkit-appearance: none;
    border: none;
    width: 200px;
    height: 200px;
    cursor: pointer;
    background: none;
    &::-webkit-color-swatch-wrapper {
      padding: 0;
      width: 200px;
      height: 200px;
    }
    &::-webkit-color-swatch {
      border: 1px solid #bfc9d9;
      border-radius: 4px;
      padding: 0;
    }
  }

  div {
    display: flex;
    margin-top: 20px;
    p {
      margin-right: 5px;
    }
  }

  input[type="text"] {
    border: 2px solid black;
    width: auto;
    font-size: 14px;

    :focus {
      outline: none;
    }
  }
`;

const ColorPicker = (props) => {
  return (
    <Container>
      <input type="color" {...props} />
      <div>
         <p>Color (HEX)</p>
          <input type="text" {...props} />
      </div>
    </Container>
  );
};


function App() {
  
  const [state, updateState] = useState("#FFFFFF");

  const handleInput = (e) => {
    updateState(e.target.value);
  };

return (
  <div className="App">
    <ColorPicker onChange={handleInput} value={state} />
  </div>
);
}

export default App;
