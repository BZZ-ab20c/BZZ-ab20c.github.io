const Vektor = (props) => {
    const x = props.x;
    const y = props.y;
    const z = props.z;
    const is3d = (z !== undefined);
    const className = 'vectorList' + (is3d ? ' threeDimVectorList' : ' twoDimVectorList')

    return (
        <div className={className}>
            <ul>
                <li>{x}</li>
                <li>{y}</li>
                {is3d ? (
                    <li>{z}</li>
                ) : (
                    <></>
                )}
            </ul>
        </div>
    )
}

export default Vektor;