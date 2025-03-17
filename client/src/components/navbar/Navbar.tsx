import "./navbar.module.scss"
import Logo from '../../assets/logo2.svg'

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="" />
      <button>Try it free</button>
    </nav>
  )
}

export default Navbar