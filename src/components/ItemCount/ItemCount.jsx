import {useState} from 'react';

const ItemCount = () => {
       const [contador, setContador] = useState(1)       //valor inicial
       const modificarContador = (operacion) => {
            if(operacion === "+"){
                if(contador < 10){
                setContador(contador + 1)
            }
            } else {
                if(contador > 1){
                setContador(contador - 1)
            }
        }
       }

    return (
        <>
          <button onClick={()=> modificarContador("+")} id="boton1" className='btn btn-dark'>+</button>
            {contador}
          <button onClick={()=> modificarContador("-")} id="boton2" className='btn btn-light'>-</button>
        </>
    );
}

export default ItemCount;
