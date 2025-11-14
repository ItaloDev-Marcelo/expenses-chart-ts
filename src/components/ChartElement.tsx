import type { Chart} from "../types/Chart.type"

const ChartElement  = ({day, amount, style}:Chart) => {
  return (
    <div className="flex flex-col items-center  ">
      <div className="mb-1.5"><p>{amount}</p></div>
      <div className={style}></div>
      <p>{day}</p>
    </div>
  )
}

export default ChartElement 