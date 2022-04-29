function Recipes({label, image, calories, ingredients}){
    return(
        <div >
            <p className="label">{label} </p>
            <img src={image} alt='avocado' />
            <p className="kkk">{calories.toFixed()} calories </p>

            <ul>
                {ingredients.map((ingredient, index) =>
                <li key={index}>{ingredient} </li>
                    
                    )}
            </ul>

        </div>
    )
}
export default Recipes;