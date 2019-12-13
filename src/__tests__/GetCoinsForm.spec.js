import React from 'react';
import {
  act,
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';
import GetCoinsForm from '../components/GetCoinsForm';

describe('<GetCoinsForm />', () => {
  let getByTestId;
  let sendHandler;

  afterEach(cleanup);

  describe('clicking the send button', () => {
    beforeEach(() => {
        sendHandler = jest.fn();
        ({ getByTestId } = render(<GetCoinsForm onSend={sendHandler} />));

        act(() => {fireEvent.change(
          getByTestId('coinText'),
          {
            target: {
              value: 'You submitted $2.85',
            },
          },
        )
      });

      fireEvent.click(getByTestId('sendButton'));
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('You submitted $2.85');
    });
  });

  describe('handle text field', ()=> {
    it('clears the text field', () => {
      const data = {
        length: 0
      };
      ({ getByTestId } = render(<GetCoinsForm onSend={sendHandler} props={data} />));
      fireEvent.click(getByTestId('sendButton'));
      expect(getByTestId('coinText').value).toEqual('');
    });
  });
});