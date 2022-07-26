import React, { useEffect, useState } from "react";
//import { Table, Button } from "react-bootstrap";
import RiasDataService from "../services/rias.services";
import { Form, Alert, InputGroup, Button, ButtonGroup, Table} from "react-bootstrap";

const RiasSelect = (props) => {
  const [rias, setRias] = useState([]);

  const moveDataHandler=(e)=>{props.onMoveData(e.target.value)}

  useEffect(() => {
    getRias();
  }, []);

  const getRias = async () => {
    const data = await RiasDataService.getAllRias();
    console.log(data.docs);
    setRias(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  
 
  return (
    <>
      <select onChange={moveDataHandler}>
        {rias.map((doc, index) => {
            return (               
            <option label={doc.nombre} value={doc.nombre}>{doc.nombre}</option>                
            );
          })}
      </select>
    </>
  );
};

export default RiasSelect;