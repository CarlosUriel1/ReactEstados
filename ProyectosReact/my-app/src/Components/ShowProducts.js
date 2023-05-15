import React,{useEffect, useState} from 'react';
import axios from 'axios';
import Swal  from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";

const ShowProducts = () => {
    const url = 'http://localhost:5187/api/Estados';
    const [products, setProducts] = useState([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [operation, setOperation] = useState(1);
    const [title,setTitle] = useState('');
    
    useEffect(()=>{
        getProducts();
    },[]);

    const getProducts = async () => {
        const respuesta = await axios.get(url);
        setProducts(respuesta.data);
    }


    return(
        <div className="App">
            <div className='container-fluid'></div>
            <div className=''></div>
        </div>
    )
} 

export default ShowProducts