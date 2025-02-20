import { render, screen } from '@testing-library/react';
import {act} from 'react';
import App from './App';

describe('Date on the calendar', function() {
    it('start date renders on the page', function(){
        act(() => {
            render(<App />);
        });
        const startDate = screen.getByLabelText("Start Date");
        expect(startDate).toBeInTheDocument();
    });

    it('end date renders on the page', function(){
        act(() => {
            render(<App />);
        });
        const endDate = screen.getByLabelText("End Date");
        expect(endDate).toBeInTheDocument();
    });
});