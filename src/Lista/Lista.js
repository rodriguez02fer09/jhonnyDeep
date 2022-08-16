

const List = (props) => {
    return(
    <div>
        <p> {props.titulo} </p>
        <ul>
            {props.items.map((item) => {
                return(
                    <li> {`${item}`} </li>
                )
            })}
        </ul>

    </div>
    )


}



export default List