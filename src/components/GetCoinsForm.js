import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
const GetCoinsForm = ({ onSend }) => {
    const [inputText, setInputText] = useState('');
    const [textAreaDisplay, setDisplayText] = useState('');

    const handleTextChange = event => {
        setInputText(event.target.value);
    };

    const handleSend = () => {
        const rawValue =(inputText + '').replace('.', '');
        onSend(inputText);
        setInputText('');
        generateCoinChange(rawValue);
    }

    const knownCoins = [
      { name: 'Silver Dollar', value: 100 },
      { name: 'Half Dollar', value: 50 },
      { name: 'Quarter', value: 25 },
      { name: 'Dime', value: 10 },
      { name: 'Penny', value: 1 },
    ];

    const coinCount = { };
    
    function generateCoinChange(remainingChange) {
      let indexOfCoin = 0;
      while (remainingChange > 0 && indexOfCoin < knownCoins.length) {
        const coin = knownCoins[indexOfCoin];
        const numberOfCoins = Math.floor(remainingChange / coin.value);
        coinCount[coin.name] = numberOfCoins;
        remainingChange -= numberOfCoins * coin.value;
        indexOfCoin++;
      }
    
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