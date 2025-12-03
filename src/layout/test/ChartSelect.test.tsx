import {render} from '@testing-library/react';
import ChartSelect from '../../utils/Chart'
import {vi} from 'vitest'

describe('render: <ChartSelect/>', () => {
     it('render ChartSelect Props:', async () => {
        const handleSelectChart = vi.fn()
        render(<ChartSelect day='mon' amount={17.5} selectChart={0} handleSelectChart={handleSelectChart} />)
     })
})