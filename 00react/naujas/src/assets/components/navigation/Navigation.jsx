const Navigation = () => {
    return(
        <nav>
            <ul>
                <li><a href="#Guide">Guide</a></li>
                <li><a href="#Config">Config</a></li>
                <li><a href="#Plugins">Plugins</a></li>
                <li><a href="#Resources">
                    <span>Resources</span>
                    <i class="bi bi-chevron-down"></i>
                </a></li>
                <li><a href="#Version">
                    <span>Version</span>
                    <i className="bi bi-chevron-down"></i>    
                </a></li>
            </ul>
        </nav>
    )
}

export default Navigation