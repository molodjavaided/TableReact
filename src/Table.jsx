import { useState } from 'react';
import { data } from './data' //  используем начальные данные
import './Table.css'

function Table() {
	const [users, setUsers] = useState(data);

	function handleDelete(id) {
		setUsers(users.filter((user) => {
			return user._id !== id;
		}));
	};

	return (
		<>
			<h1>Table</h1>
			<table>
				<thead>
					<tr>
						<th>Имя</th>
						<th>Возраст</th>
						<th>Удалить</th>
					</tr>
				</thead>
				<tbody>
			{users.map((user) => (
            <tr key={user._id} >
             <td>{user.name}</td>
             <td>{user.age}</td>
             <td>
			 <button onClick={() => handleDelete(user._id)}>
				Удалить
	  		 </button>
			 </td>
            </tr>
          ))}
				</tbody>
			</table>
		</>
	)
}

export default Table
