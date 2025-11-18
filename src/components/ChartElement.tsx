import type { Chart} from "../types/Chart.type"

const ChartElement  = ({day, amount, style,selectChart,handleSelectChart}:Chart) => {

  

  return (
    <div className="flex flex-col items-center">
      <div className={selectChart === amount ? 'mb-1.5 bg-Neutral-Brown-950 text-Neutral-red-100 text-[.8em] p-1 font-bold  rounded-[5px]' : 'hidden'}><p>${amount}</p></div>
      <div className={style} onClick={() => handleSelectChart(amount)}></div>
      <p className="text-Neutral-Brown-400">{day}</p>
    </div>
  )
}

export default ChartElement 