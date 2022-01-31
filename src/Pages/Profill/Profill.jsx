import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Profill() {
	const navigate = useNavigate();
	const { id } = useParams();

	const [user, setUser] = React.useState({});
	const [isLoading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((response) => response.json())
			.then((data) => {
				setUser(data?.data);
				setLoading(false);
			});
	}, [id]);

	if (isLoading) {
		return <h1>Loading ... </h1>;
	} else {
		return (
			<div className='ps-5 px-5'>
				<button className='btn btn-sm btn-outline-danger' onClick={() => navigate(-1)}>
                    Ortga
                </button>
				<h1 className='text-info'>
                    {user.first_name + ' ' + user.last_name}
                </h1>
				<img src={user.avatar} width={400} height={400} alt={user.first_name + "'s avatar"} />
				<h3 className='text-info'>
                    {user.email}
                </h3>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, nobis doloribus odio laborum nulla temporibus earum eius eveniet repudiandae natus porro aperiam rerum maxime mollitia illum soluta ut nihil voluptatum blanditiis veritatis. Dolorum pariatur dolores inventore nam debitis aliquam facere natus laboriosam, vitae explicabo? Numquam, sint quos odit alias, modi accusantium iusto a cupiditate eligendi expedita illo minima at repellat dolorem repellendus ea quidem hic, magnam ipsum consectetur! Obcaecati, praesentium!
                </p> 
				<button className='btn btn-danger'>Log Out</button>     
			</div>
		);
	}
}

export default Profill;