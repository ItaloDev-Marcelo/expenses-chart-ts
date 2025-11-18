import ChartElement from '../components/ChartElement'
import type {Chart2} from '../types/Chart.type'


const ChartSelect = ({day,amount,selectChart,handleSelectChart}:Chart2) => {
    switch(day) {
        case 'mon':
         return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-7 bg-Primary-red mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
        case 'tue' :
        return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-14 bg-Primary-red mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
        case 'wed' :
        return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-26 bg-Primary-blue mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
        case 'thu' :
        return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-12 bg-Primary-red mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
        case 'fri' :
        return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-9 bg-Primary-red mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
        case 'sat' :
        return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-20 bg-Primary-red mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
        case 'sun' :
        return <ChartElement day={day} amount={amount} selectChart={selectChart} handleSelectChart={handleSelectChart} style='  w-6.5 md:w-8  xl:w-9 h-13 bg-Primary-red mx-2  rounded-t cursor-pointer hover:opacity-[0.7]' />
        break;
    }
}

export default ChartSelect