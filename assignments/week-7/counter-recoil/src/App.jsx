import { useContext} from "react"
import { CountContext } from "./context"
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { countAtom, isEvenSelector } from "./store/atoms/count"

// The main App component wrapped with RecoilRoot to provide Recoil state context
function App() {
  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  );
}

// Count component rendering CountRenderer, Buttons, and EvenStatus components
function Count() {
  return (
    <div>
      <CountRenderer />
      <Buttons />
      <EvenStatus />
    </div>
  );
}

// CountRenderer component to display the current value of countAtom
function CountRenderer() {
  const count = useRecoilValue(countAtom); // Subscribing to the countAtom state
  return (
    <div>
      {count}
    </div>
  );
}

// Buttons component to increment and decrement the countAtom state
function Buttons() {
  const setCount = useSetRecoilState(countAtom); // Getting the setter function for countAtom

  console.log("buttons-rerender"); // Log to console whenever the Buttons component re-renders

  return (
    <div>
      <button onClick={() => {
        setCount(count => count + 1); // Incrementing the count
      }}>Increase</button>

      <button onClick={() => {
        setCount(count => count - 1); // Decrementing the count
      }}>Decrease</button>
    </div>
  );
}

// EvenStatus component to display a message if the count is even
function EvenStatus() {
  const isEven = useRecoilValue(isEvenSelector); // Subscribing to the isEvenSelector state
  return (
    <div>
      {isEven && <p>Even</p>} {/* Conditionally rendering "Even" if isEven is true */}
    </div>
  );
}

export default App; // Exporting the App component as the default export
