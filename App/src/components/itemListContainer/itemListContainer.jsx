

const ItemListContainer = ({greeting="greeting"}) =>{

    function saludoA(){
        alert("Hola")
    }
    return (
        <div>
            {greeting}
            <button onClick={saludoA}>Click</button>
        </div>
    )
}

export default ItemListContainer