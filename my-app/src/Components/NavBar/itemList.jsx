const ItemList = ({greeting="greeting"}) => {
    function saludoAlert(){
        alert("Hola")
    }
  return (
    <div className="contenedorClick">
        {greeting}
        <button onClick ={saludoAlert} >Click</button>
    </div>
  )
}

export default ItemList