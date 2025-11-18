

export type communProps = {
    day:string;
   amount:number;
}

export type ChartProps = {
    style?: string
} 

export type ChartProps2 = {
    handleSelectChart: (text:number) => void, 
    selectChart: number
}

export type  Chart = communProps & ChartProps &  ChartProps2;
export type Chart2 = communProps & ChartProps2;
