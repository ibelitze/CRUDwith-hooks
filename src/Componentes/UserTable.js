import User from './User';

const UserTable = (props) => {

	const usrs = props.users.map((item) => {
		return <User key={item.id} user={item} eliminar={props.eliminarUsuario} editar={props.editarRow} />
	});

	return (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Accion</th>
              </tr>
            </thead>
            <tbody>
            	{usrs.length > 0 ? usrs : <tr>No hay usuarios...</tr>}
            </tbody>
          </table>
	)
}

export default UserTable;