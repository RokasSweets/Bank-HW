import React, {useState} from 'react'

export default function Bank() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [client, setClient] = useState([]);

    const addClient = (e) => {
        if(client){
            let balance = 0;
            const newClient = {id: new Date().getTime().toString(), name, surname, balance}
            setClient([...client, newClient]);
            localStorage.setItem("clientlist", JSON.stringify([...client, newClient]))
            setName('')
            setSurname('')
        }
    }
  return (
    <>
    <div className='badge'>
        We have
        {client.length === 0 ? " no customers!" : client.length === 1 ? " 1 customer!" : client.length > 1 ? ` ${client.length} customers!` : null}
    </div>
    <div className='container row'>
        <h1 className='mt-3 text-white'>Bank HW</h1>
        <p className='mt-1 text-white'>Add Your account</p>
        <div className='col-5'>
            <input className='form-control' name="name" type="text" value={name} placeholder="Name" onChange={(e) => setName(e.target.value)} required/>
            <input className='form-control mt-2' name="surname" type="text" value={surname} placeholder="Surname" onChange={(e) => setSurname(e.target.value)} required/>
        </div>
    </div>
    <div className='container row'>
        <div className='col-5 mt-3 mb-3'>
        <button className='btn btn-primary form-control' onClick={addClient}>Add</button>
        </div>
        <div className='opacity90 mt-2 col-12 col-md-7 '>
        {
            client.map((client) => (
                <React.Fragment key={client.id}>
                    <div>
                        <span className='form-control bg-white btn mt-2 mb-2' style={{
                            textAlign: "left", fontWeight: "bold", alignContent: "flex-end"}}>{client.name} {client.surname} Balance: {client.balance}</span>
                    </div>
                </React.Fragment>
            ))
        }
    </div>
    </div>
    </>
  )
}
