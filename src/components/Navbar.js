import { Link } from "react-router-dom"

const Navbar = () => {
    return(
        <header>
            <nav>
                <Link to={'/'}> Home </Link>
                <Link to={'/class'}> Class </Link>
            </nav>
        </header>
    )
}

export default Navbar