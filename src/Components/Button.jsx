function Button(props) {
    return (
        <>
            <button className="stepBtn" onClick={props.onClick}>{props.children}</button>
        </>
    )
}

export default Button