import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

	/* react-hook-forms */
	const { register, handleSubmit, errors, setValue } = useForm({
    defaultValues: props.usuario
  });

  setValue('nombre', props.usuario.nombre);
  setValue('apellido', props.usuario.apellido);

	const onSubmit = (data, e) => {
    data.id = props.usuario.id;
    props.editar(props.usuario.id, data);
		e.target.reset();
	}

	return (
		<div>
		  <h1>Editar usuario</h1>
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

export default EditUserForm;