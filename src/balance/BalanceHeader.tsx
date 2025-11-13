import logo from '../assets/images/logo.svg'

const BalanceHeader = () => {
  return (
    <header className='bg-Primary-red flex justify-between items-center h-[90px] rounded-2xl w-[325px] md:w-[375px] xl:w-[400px] p-2'>
        <div className='ml-3 text-Neutral-red-100'>
            <h1 className='text-[.8em]'>My balance</h1>
            <p  className='text-[1.125em] xl:text-[1.2em] mt-1 font-bold'>$921.48</p>
        </div>
        <a href='#'><img src={logo} alt='logo' className='w-[75%]' /></a>
    </header>
  )
}

export default BalanceHeader