import { render, screen } from '@testing-library/react';
import {act} from 'react';
import BookSchedule from './Booklist';


describe('BookSchedule component', () =>  {
  it('the ADD BOOK button is present on the page', function() {
      act(() => {
        render(<BookSchedule />);
      });
      const addButton = document.getElementById('button-add');
      expect(addButton).toBeInTheDocument();
  });
});