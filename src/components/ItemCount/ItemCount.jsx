import {useState} from 'react';

const ItemCount = (props) => {
       const [contador, setContador] = useState(props.initial)       //valor inicial
       const modificarContador = (operacion) => {
            
            if(operacion === "+"){

                
                if(contador < props.stock){
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
          <button onClick={()=> modificarContador("-")} id="boton2" className='btn btn-primary'>-</button>
          {contador}
          <button onClick={()=> modificarContador("+")} id="boton1" className='btn btn-primary'>+</button>
                     
        </>
    );
}

export default ItemCount;
