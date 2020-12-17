import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

	/* react-hook-forms */
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = (data, e) => {
		props.agregarUsuario(data);
		e.target.reset();
	}

	return (
    <div>
      <h1>Agregar usuario</h1>
          <br />
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" 
                 placeholder="Ingrese el nombre"
                 className="form-control my-2"
                 name="nombre"
                 ref={
                register({
                  required: {value: true, message: 'el nombre es obligatorio'},
                  minLength: {value: 4, message: 'Mínimo 4 caracteres obligatorio'},
                })} />
              {errors.nombre && 
                <span className="text-danger text-small d-block mb-2"> 
                  {errors.nombre.message} 
                </span>
              }
            <input type="text" 
                 placeholder="Ingrese apellido aquí"
                 className="form-control my-2"
                 name="apellido"
                 ref={
                register({
                  required: {value: true, message: 'El apellido es obligatorio'},
                  minLength: {value: 4, message: 'Mínimo 4 caracteres obligatorio'},
                })} />
              {errors.apellido && 
                <span className="text-danger text-small d-block mb-2"> 
                  {errors.apellido.message} 
                </span>
              }
            <button className="btn btn-primary" 
                type="submit">Guardar</button>
          </form>
    </div>
	)
}

export default AddUserForm;