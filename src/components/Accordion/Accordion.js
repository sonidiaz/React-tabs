import React, {useEffect, useState} from 'react'

const Accordion = () => {
		const [list, setList] = useState([])

		const fetchTodos = () => fetch('https://jsonplaceholder.typicode.com/todos')
			.then(function(response) {
				return response.json();
			})
			.then(function(myJson) {
				setList(myJson);
			});
		useEffect(() => {
			fetchTodos()
		},[])
    return (
        <ul>
            {
                list.map( (el, idx) => (
                    <li key={idx}>{el.title}</li>
                ))
            }
        </ul>
    )
}

export {Accordion}