import { useState } from 'react';
import AddUserForm from './Componentes/AddUserForm';
import EditUserForm from './Componentes/EditUserForm';
import UserTable from './Componentes/UserTable';
import { v4 as uuidv4 } from 'uuid';

function App() {

  /* Creating initial data */
  const data = [
    {id: uuidv4(), nombre: 'Ibelitze', apellido: 'Zambrano'},
    {id: uuidv4(), nombre: 'Carlos', apellido: 'Chiroque'}
  ];

  /* states */
  const [usuarios, setUsuarios] = useState(data);
  const [editing, setEditing] = useState(false);
  const [currentUsuario, setCurrentUsuario] = useState({id: null, nombre: '', apellido: ''});

  /* adding new user */
  const agregarUsuario = (user) => {
    user.id = uuidv4();
    setUsuarios([...usuarios, user]);
  }

  /* Deleting user */
  const eliminarUsuario = (id) => {
    setUsuarios(usuarios.filter((user) => user.id !== id ));
  }

  /* Activating the edit function */
  const editarRow = (user) => {
    setEditing(true);
    setCurrentUsuario({id: user.id, nombre: user.nombre, apellido: user.apellido});
  }

  /* Editing user (finally) */
  const editUser = (id, editedUser) => {
    setEditing(false);
    setUsuarios(usuarios.map(user => (user.id === id ? editedUser : user)));
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-10 col-xs-12">
            {editing ? <EditUserForm usuario={currentUsuario} editar={editUser} /> : <AddUserForm agregarUsuario={agregarUsuario} />}       
        </div>
      </div>
      <br/>

      <div className="row">
        <div className="col-md-10 col-xs-12">
          <UserTable users={usuarios} 
                     eliminarUsuario={eliminarUsuario}
                     editarRow={editarRow} />
        </div>
      </div>

    </div>
  );
}

export default App;
