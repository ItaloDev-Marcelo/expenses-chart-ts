import {render} from '@testing-library/react';
import ExpensesChartLayout from '../ExpensesChartLayout';

describe('render: <ExpensesChartLayout/>:', () => {
     it('render ExpensesChartLayout title:', () => {
        const {getByText} = render(<ExpensesChartLayout/>)
        expect(getByText('Speding - Last 7 days')).toBeInTheDocument()
     })

     it('render ExpensesChartLayout Total block :', () => {
        const {getByText} = render(<ExpensesChartLayout/>)
        expect(getByText('Total this month')).toBeInTheDocument()
        expect(getByText('$478.33')).toBeInTheDocument()
        expect(getByText('+2.4%')).toBeInTheDocument()
        expect(getByText('from last month')).toBeInTheDocument()
     })

})