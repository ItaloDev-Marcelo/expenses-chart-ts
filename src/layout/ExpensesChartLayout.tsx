
import Data from '../data.json'
import Chart from '../utils/Chart'
const ExpensesChartLayout = () => {


    return (
        <main className='w-[325px] md:w-[375px] xl:w-[400px] bg-white rounded-2xl'>
            <section className="w-full p-5 space-y-2.5  ">
                <div className='mb-2.5'>
                    <h2 className='mb-5 text-[1.3rem] md:text-[1.5rem] xl:text-[1.6rem] font-bold  '>Speding - Last 7 days</h2>
                   <div className='flex flex-row justify-center items-end  '>
                     {Data.map((valor, index) => (
                         <Chart day={valor.day} amount={valor.amount} key={index} />
                    ))}
                   </div>
                </div>
                <hr />
                <div className='flex flex-row justify-between p-2'>
                    <div>
                        <p>Total this month</p>
                        <h3>$478.33</h3>
                    </div>
                    <div>
                        <p>+2.4%</p>
                        <p>from last month</p>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ExpensesChartLayout