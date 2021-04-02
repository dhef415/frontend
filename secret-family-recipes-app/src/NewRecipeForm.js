import React, { useState } from 'react';
import axios from 'axios';

const initialValues = {
    dish: '',
    ingredients: '',
    directions: '',
}

export default function NewRecipe(props) {
    const [dish, setDish] = useState('');
    const [ingredients,setIngredients] = useState('');
    const [directions,setDirections] = useState('');
    const {values,} = props;

    const [formValues, setFormValues] = useState(initialValues);

    const onChange = e => {
        setFormValues({
            ...formValues, [e.target.name]: e.target.value
        });
    };



    const onSubmit = (evt) => {
        evt.preventDefault()
        console.log(`
        Dish: ${dish}
        Ingredients: ${ingredients}
        Directions: ${directions}
        `)
        axios
        .post('',formValues)
        .then((res) => {

        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div className='recipe-form-container'>
            <h1>Recipes</h1>
            <form className='recipe-form'>
                <h3>Start Your New Recipe</h3>
                <div>
                    <label>Name of dish
                        <input
                        type='text'
                        name='dish-name'
                        placeholder='Enter dish name'
                        value={values.dish}
                        onChange={onChange /*e => setDish(e.target.value)*/}
                        >
                        </input> 
                    </label>
                </div>
                
                <div>
                    <label>Ingredients
                        <input
                        type='text'
                        name='ingredients'
                        placeholder='Ingredients'
                        value={values.ingredients}
                        onChange={onChange /*e => setIngredients(e.target.value)*/}
                        >
                        </input>
                    </label>
                </div>
                <div>
                    <label>Directions
                        <input
                        type='text'
                        name='directions'
                        placeholder='Directions'
                        value={values.directions}
                        onChange={ onChange/*e=> setDirections(e.target.value)*/}
                        >
                        </input>
                    </label>
                </div>
                
                <div className='submit-button'>
                    <button onClick={onSubmit}>Submit</button>
                </div>
            </form>
        </div>
    )

}