import React, {useContext} from "react"
import { useNavigate, Link } from "react-router-dom";
import { createOrdenCompra, getProducto, updateProducto } from "../../assets/firebase"
import { CartContext } from "../../context/CartContext"
import {toast } from 'react-toastify';
import { useState } from "react"; //////////////////////////////////////////////////////////

const Checkout = () => {
    const datosFormulario = React.useRef()
    let navigate = useNavigate()
    const {cart,emptyCart, totalPrice} = useContext(CartContext);

    const [errores,setErrores] = useState('')

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        if(valores.email != valores.email2){
            setErrores('Los emails ingresados no coinciden')
            return
        }


        const aux = [...cart]
        aux.forEach(producto => {
            getProducto(producto.id)
            .then(prod => {
                prod.stock -= producto.cant
                updateProducto(producto.id, prod)
            })
        })
        
        createOrdenCompra(valores, totalPrice(), new Date().toISOString().slice(0, 10)).then(orden => {
            toast.success(`Su orden ${orden.id} fue creada con éxito`)
            emptyCart()
            e.target.reset()
            navigate("/")
          
        }).catch(error => {
            toast.error(`Su orden no fue creada con éxito`)
            console.error(error)
        })
        
    
    }

    const emails = (e) => {
        const datForm = new FormData(datosFormulario.current)
        const valores = Object.fromEntries(datForm)
        if(valores.email != valores.email2){
            setErrores('Los emails ingresados no coinciden')
            return
        }
        if(valores.email == valores.email2){
            setErrores('')
            
        }
        
    }

    return (
        <div className="container">
            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                <br></br>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" className="form-control" name="apellido" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Repetir email</label>
                    <input type="email" className="form-control" name="email2" onChange={emails} required/>
                    <p className="errores">{errores}</p>
                </div>
                <div className="mb-3">
                    <label htmlFor="dni" className="form-label">DNI</label>
                    <input type="number" className="form-control" name="dni" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="celular" className="form-label">Numero telefonico</label>
                    <input type="number" className="form-control" name="celular" required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">Dirección</label>
                    <input type="text" className="form-control" name="direccion" required/>
                </div>
                   
                        <button type="submit" className="btn btn-primary finalizar">Finalizar Compra</button>
                
                    
                    
        
            </form>

        </div>
    );
}

export default Checkout;