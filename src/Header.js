import logo from './logo.svg';
import { useState, useEffect} from 'react'

const Header = () => {
    const [openNav, setOpenNav] = useState(false)

    useEffect(() => {
        document.body.classList.toggle('sections-nav-in', openNav)
    }, [openNav])
    
    return (
        <header class="header">
            <div class="container-fluid-limited d-flex align-items-center justify-content-between">
                <a href="https://www.danielduran.cz/portfolio/index.html" class="header-brand">
                    <img src={logo} data-light-src={logo} data-dark-src={logo} alt="Your logo" />
                </a>
                <button onClick={() => setOpenNav(!openNav)} class="sections-nav-toggler" aria-label="Toggle navigation">
                    <span class="sections-nav-toggler-bar"></span>
                    <span class="sections-nav-toggler-bar"></span>
                    <span class="sections-nav-toggler-bar"></span>
                    <span class="sections-nav-toggler-bar"></span>
                </button>
            </div>
        </header>
    )
}

export default Header