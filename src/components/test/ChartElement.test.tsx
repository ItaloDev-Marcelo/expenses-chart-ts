import {render, screen} from '@testing-library/react';
import ChartElement from '../ChartElement'
import userEvent  from '@testing-library/user-event';
import {vi} from 'vitest'

describe('render <ChartElement/>:', () => {
     it('Props to ChartElement:', async () => {
        const handleSelectChart = vi.fn();
        render(
        <ChartElement day='mon' 
        amount={17.45}  
        style='w-6.5 md:w-8  xl:w-9 h-7 bg-Primary-red mx-2  
        rounded-t cursor-pointer hover:opacity-[0.7]'
        selectChart={1} handleSelectChart={handleSelectChart} />)
        const chart = screen.getByTestId('chart-bar');
        await userEvent.click(chart)
      expect(handleSelectChart).toHaveBeenCalledWith(17.45);
     })
})