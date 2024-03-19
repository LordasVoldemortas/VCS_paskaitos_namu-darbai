import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/project-one">Project No.1</Link>
                    </li>
                    <li>
                        <Link to="/project-two">Project No.2</Link>
                    </li>
                    <li>
                        <Link to="/project-three">Project No.3</Link>
                    </li>
                    <li>
                        <Link to="/project-four">Project No.4</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header