import UserInput from "./components/UserInput/UserInput.jsx";
import Result from "./components/Result/Result.jsx";
import {useState} from "react";

const INITIAL_DATA = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10
};

function App() {
  const [input, setInput] = useState(INITIAL_DATA);
  const isInputValid = input.duration > 0;

  function handleInputChange(identifier, newValue) {
    setInput(prevInput => (
      {
        ...prevInput,
        [identifier]: +newValue  // plus sign converts string into number
      }
    ));
  }

  return (
    <>
      <div id="user-input">
        <div className="input-group">
          <UserInput
            value={input.initialInvestment}
            onChange={e => handleInputChange('initialInvestment', e.target.value)}
          >
            Initial Investment
          </UserInput>
          <UserInput
            value={input.annualInvestment}
            onChange={e => handleInputChange('annualInvestment', e.target.value)}
          >
            Annual Investment
          </UserInput>
        </div>
        <div className="input-group">
          <UserInput
            value={input.expectedReturn}
            onChange={e => handleInputChange('expectedReturn', e.target.value)}
          >
            Expected Return
          </UserInput>
          <UserInput
            value={input.duration}
            onChange={e => handleInputChange('duration', e.target.value)}
          >
            Duration
          </UserInput>
        </div>
      </div>
      {
        isInputValid ?
          <Result input={input}/> :
          <p className="center">Please enter a duration greater than 0.</p>
      }
    </>
  )
}

export default App
