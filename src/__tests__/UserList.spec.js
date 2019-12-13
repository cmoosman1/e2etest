import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';
import UserList from '../components/UserList';

afterEach(cleanup);

describe('<UserList />', () => {
  let list;
  describe('render list', () => {
    beforeEach(() => {
      let getByTestId;
      let users = 'john doe';
      users = ['joe', 'jane'];
        ({ getByTestId } = render(<UserList data={users} />));

        list = getByTestId('userList');
    });

    it('clears the text field', () => {
        expect(list.children.length).toBe(1);
    });
  });
});