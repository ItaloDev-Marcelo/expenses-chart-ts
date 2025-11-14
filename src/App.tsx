import BalanceHeader from './balance/BalanceHeader'
import ExpensesChartLayout from './layout/ExpensesChartLayout'
function App() {
 
  return (
     <div className='flex flex-col items-center justify-center mt-18 tb:mt-[5;5rem] md:mt-20 xl:mt-28 px-2'>
       <BalanceHeader/>
       <ExpensesChartLayout/>
     </div>
  )
}

export default App
