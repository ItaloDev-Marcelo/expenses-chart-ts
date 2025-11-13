import logo from '../assets/images/logo.svg'

const BalanceHeader = () => {
  return (
    <header>
        <div>
            <h1>My balance</h1>
            <p>$921.48</p>
        </div>
        <a href='#'><img src={logo} alt='logo' /></a>
    </header>
  )
}

export default BalanceHeader