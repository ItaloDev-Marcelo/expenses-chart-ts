import ChartElement from '../components/ChartElement'
import type {communProps} from '../types/Chart.type'

const ChartSelect = ({day,amount}:communProps) => {
    switch(day) {
        case 'mon':
         return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-7 bg-Primary-red mx-2  rounded-t-xs' />
        break;
        case 'tue' :
        return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-14 bg-Primary-red mx-2  rounded-t-xs' />
        break;
        case 'wed' :
        return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-26 bg-Primary-red mx-2  rounded-t-xs' />
        break;
        case 'thu' :
        return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-12 bg-Primary-red mx-2  rounded-t-xs' />
        break;
        case 'fri' :
        return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-9 bg-Primary-red mx-2  rounded-t-xs' />
        break;
        case 'sat' :
        return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-20 bg-Primary-red mx-2  rounded-t-xs' />
        break;
        case 'sun' :
        return <ChartElement day={day} amount={amount} style='  w-6.5 md:w-8  xl:w-9 h-13 bg-Primary-red mx-2  rounded-t-xs' />
        break;
    }
}

export default ChartSelect