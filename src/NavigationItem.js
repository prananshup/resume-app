

const NavigationItem = (props) => {
    return (
        <li className={"sections-nav-item"}>
            <a href={`#section-0${props.index + 1}`} className={"nav-link sections-nav-link goto-section"}>
                <span className={"sections-nav-counter"}>{`0${props.index + 1}`}</span>
                {props.title}
            </a>
        </li>
    )
}

export default NavigationItem