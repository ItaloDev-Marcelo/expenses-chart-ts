import { useState } from 'react'
import Data from '../data.json'
import ChartSelect  from '../utils/Chart'
const ExpensesChartLayout = () => {

    const [selectChart,setSelectChart] = useState(0);
    const handleSelectChart = (index:number) => setSelectChart(index)

    return (
        <main className='w-[325px] md:w-[375px] xl:w-[400px] bg-white rounded-2xl ds:scale-125'>
            <section className="w-full p-5 space-y-2.5   ">
                <div className='mb-3 my-1'>
                    <h2 className='mb-5 text-[1.3rem] md:text-[1.5rem] xl:text-[1.6rem] font-bold '>Speding - Last 7 days</h2>
                   <div className='flex flex-row justify-center items-end mt-1 h-35 '>
                     {Data.map((valor, index) => (
                         <ChartSelect  day={valor.day} amount={valor.amount} key={index} 
                         selectChart={selectChart} handleSelectChart={handleSelectChart}
                          />
                    ))}
                   </div>
                </div>
                <hr />
                <div className='flex flex-row justify-between p-2' id='total'>
                    <div>
                        <p className='text-Neutral-Brown-400'>Total this month</p>
                        <h3 className='text-Neutral-Brown-950 text-[1.7em] font-bold'>$478.33</h3>
                    </div>
                    <div className='text-Neutral-Brown-400 flex-row items-end justify-end text-right'>
                        <p className='text-Neutral-Brown-950 mb-1 font-bold'>+2.4%</p>
                        <p className='text-Neutral-Brown-400'>from last month</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ExpensesChartLayout