import { useState } from 'react';
import './index.css';
import { Container } from "@mui/material";

function App()
{
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () =>
  {
    setIsExpanded(!isExpanded);
  }


  return (
    <Container>
      <div>
          <h1 className="text-4xl font-extrabold text-center">Five Nights at <span className='text-red-600 dark:text-red-500'>DIDDY</span></h1>
          <h2 class="text-4xl font-bold">Item Shop</h2>

          <div>
            <button type="button" onClick={toggleExpand}>Baby Oil</button>
            {isExpanded && (
              <div>
                <p>Baby Oil can be spread on the floor to slip Diddy, making him take 10 damage.</p>
                <p></p>
              </div>
            )}
          </div>

          <div>
            <button type="button" onClick={toggleExpand}>FBI Body Camera</button>
            {isExpanded && (
              <div>
                <p>This body camera sends live footage to the FBI. If you survive long enough, they will gather enough information to know where you are!</p>
              </div>
            )}
          </div>

          <div>
            <button
              type="button" onClick={toggleExpand}>Pepper Spray</button>
            {isExpanded && (
              <div>
                <p>Pepper spray is sprayed directly into Diddy's eyes, blinding him for 8 seconds.</p>
              </div>
            )}
          </div>

          <div>
            <button
              type="button" onClick={toggleExpand}>identification Card</button>
            {isExpanded && (
              <div>
                <p>This 18+ ID will be presented to Diddy, rendering him stunned for 5 seconds. Beware, after being stunned he will come back angrier!</p>
              </div>
            )}
          </div>
        </div>
    </Container>
  );
}

export default App
