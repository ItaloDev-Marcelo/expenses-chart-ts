import {render} from '@testing-library/react';
import BalanceHeader from '../BalanceHeader'



describe('render <BalanceHeader>:', () => {
    
     it('render Balance Title and Price:', () => {
        const {getByText} = render(<BalanceHeader/>);
         expect(getByText('My balance')).toBeInTheDocument()
         expect(getByText('$921.48')).toBeInTheDocument()
     })

     it('render Header:', () => {
        const {getByRole} = render(<BalanceHeader/>);
        const Header = getByRole('banner');
        expect(Header).toHaveClass('bg-Primary-red')
     })

     it('render Header BackgroundColor:', () => {
        const {getByRole} = render(<BalanceHeader/>);
        expect(getByRole('img')).toBeInTheDocument();
     })

     it('render', () =>{
        const {getByRole} = render(<BalanceHeader/>);
        const Header = getByRole('banner')
        expect(Header).toHaveClass('bg-Primary-red')
     })

})