import React from 'react';
import {
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

      fireEvent.change(
        getByTestId('coinText'),
        {
          target: {
            value: 'You submitted $2.85',
          },
        },
      );

      fireEvent.click(getByTestId('sendButton'));
    });

    it('clears the text field', () => {
      expect(getByTestId('coinText').value).toEqual('');
    });

    it('calls the send handler', () => {
      expect(sendHandler).toHaveBeenCalledWith('You submitted $2.85');
    });
  });
});