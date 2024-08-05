function Food(props){

    const {food} = props

    return(
        <div>
            {food}
        </div>
    )
}

Food.defaultProps = {
    food: 'iceCream'
}

export default Food;