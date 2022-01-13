import NavigationItem from './NavigationItem'

const Navigation = (props) => {
    return (
        <nav className={"sections-nav-container"}>
            <ul id="sections-nav" className={"nav sections-nav sections-nav-animated"}>
                <NavigationItem key={0} title={"top"} index={0}/>
                {props.sections && props.sections.map((section, index) => 
                    <NavigationItem key={index + 1} title={section.title} index={ index + 1}/>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;