export const App = () => {
  
  const clasesObjeto = {
    primary: "text-primary",
    secondary:"text-secondary",
    danger: "text-danger",
    success: "text-success"
  };
  const Saludos = () =>{//es componente
    return <h2 className={clasesObjeto.success}>Saludo de bienvenida</h2>
  };
  const SaludoDespedida = () =>{
    return <h2 className={clasesObjeto}>Adios</h2>
  };
  
  const frutas = ["🍎","🍏","🍍","🍓","🍈","🍉"];

  const usuario = false;

  return (
    <div className="container">
      componente 1
      <p className={clasesObjeto.danger}><Saludos /></p>
      <p>123</p>
      {usuario ? <h1 className={clasesObjeto.primary}>{Saludos} En línea</h1>
               :<h1  className={clasesObjeto.danger}><SaludoDespedida /> Fuera de línea</h1>}
      <p className={clasesObjeto}>{SaludoDespedida}</p>
     <ul>
       {
       frutas.map((fruta, index)=>(
         <li>{index+1} ==>> {fruta}</li>
       ))}
     </ul>
    </div>
  )
}

