import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
const GetCoinsForm = ({ onSend }) => {
    /**
     * setup hooks 
     */
    const [inputText, setInputText] = useState('');
    const [textAreaDisplay, setDisplayText] = useState('');

    /**
     * 
     * @param {*} event
     * handle change event to update setInputText() 
     */
    const handleTextChange = event => {
        setInputText(event.target.value);
    };

    /**
     * strips decimal out of input value
     * handleSend passes props up to App
     * clears text inpue 
     * call generateCoinChange(rawValue)
     */
    const handleSend = () => {
        const rawValue =(inputText + '').replace('.', '');
        onSend(inputText);
        setInputText('');
        generateCoinChange(rawValue);
    }

    /**
     * coin register
     */
    const knownCoins = [
      { name: 'Silver Dollar', value: 100 },
      { name: 'Half Dollar', value: 50 },
      { name: 'Quarter', value: 25 },
      { name: 'Dime', value: 10 },
      { name: 'Penny', value: 1 },
    ];

    /**
     * cionCount obj
     */
    const coinCount = { };
    
    /**
     * 
     * @param {*} remainingChange 
     * Looping through the remainingChange and subtracting down to 
     * get number of 
     */
    function generateCoinChange(remainingChange) {
      let indexOfCoin = 0;
      while (remainingChange > 0 && indexOfCoin < knownCoins.length) {
        const coin = knownCoins[indexOfCoin];
        const numberOfCoins = Math.floor(remainingChange / coin.value);
        coinCount[coin.name] = numberOfCoins;
        remainingChange -= numberOfCoins * coin.value;
        indexOfCoin++;
      }
    
      /**
       * parse obj for display in view and call setDisplayText 
       * to update state
       */
      const text = Object.getOwnPropertyNames(coinCount)
        .map(coinName => coinName + ': ' + coinCount[coinName])
        .join(`, `);
        setDisplayText(text);
    }

  return (
    <div>
        <InputGroup className="mb-3 form-font">
          $<FormControl
            type="text"
            data-testid="coinText"
            value={inputText}
            onChange={handleTextChange}
            placeholder="Input dollar amout to see coin conversion"
          />
          <InputGroup.Append>
            <Button 
            variant="outline-secondary" 
            data-testid="sendButton"
            onClick={handleSend}>
              Button
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div>
          {textAreaDisplay}
        </div>
    </div>
  );
};

export default GetCoinsForm;