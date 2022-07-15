import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import RiasDataService from "../services/rias.services";

const RiasList = () => {
  const [rias, setRias] = useState([]);
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
      <div className="mb-2">
        <Button variant="dark edit" onClick={getRias}>
          Refresh List
        </Button>
      </div>

      {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Ria</th>
          </tr>
        </thead>
        <tbody>
          {rias.map((doc, index) => {
            return (
              <tr key={doc.id}>
                <td>{index + 1}</td>
                <td>{doc.nombre}</td>
                
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default RiasList;