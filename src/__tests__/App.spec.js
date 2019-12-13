import React from 'react';
import {
   act,
  render,
  fireEvent,
  cleanup,
} from '@testing-library/react';

import App from '../App';

describe('<App />', () => {

  afterEach(cleanup);

  describe('render application', () => {
    beforeEach(() => {
      let getByTestId;
      let sendHandler = jest.fn();
      ({ getByTestId } = render(<App onSend={sendHandler} />));

      fireEvent.click(
        getByTestId('coinText'),
        {
          target: {
            value: '$7.98',
          },
        },
      );

      fireEvent.click(getByTestId('sendButton'));
    });

    it("renders", () => {
      const { asFragment } = render(<App />);
      act(() => {expect(asFragment()).toMatchSnapshot()});
    });
  });
});