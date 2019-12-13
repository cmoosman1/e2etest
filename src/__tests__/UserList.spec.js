import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';
import UserList from '../components/UserList';

describe('<UserList />', () => {
  let getByTestId;
  let list;
  let users = 'john doe'; 
  afterEach(cleanup);

  describe('render list', () => {
    beforeEach(() => {
        users = ['joe', 'jane'];
        ({ getByTestId } = render(<UserList data={users} />));

        list = getByTestId('userList');
    });

    it('clears the text field', () => {
        expect(list.children.length).toBe(1);
    });
  });
});