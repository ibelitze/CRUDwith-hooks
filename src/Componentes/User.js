

const User = (props) => {
	return (
        <tr>
          <th scope="row">{props.user.id}</th>
          <td>{props.user.nombre}</td>
          <td>{props.user.apellido}</td>
          <td>
          	<button className="btn btn-danger" onClick={() => {props.eliminar(props.user.id)}}>Eliminar</button>
          	<button className="btn btn-primary" onClick={() => props.editar(props.user)}>Editar</button>
      	  </td>
        </tr>
	)
}

export default User;