import { useState } from "react";
const FullName = ()=>{
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname]  = useState('');
    const [fullname, setFullname] = useState('')
   const handleSubmit =(e)=>{
      setFullname (`${firstname} ${lastname}`);
      e.preventDefault();
        setFirstname(''); // clearing the firstname
        setLastname('');// clearing the lastname
        //  e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <h1>Full Name Display</h1>
            <div>
            First Name:<input type="text" name="firstname" id="firstname"  value={firstname} 
            onChange={(e)=>setFirstname(e.target.value)}required/>
           </div>
           <div>
            Last Name:<input type="text" name="lastname" id="lastname"  value={lastname}  onChange={(e)=>setLastname(e.target.value)}required/>
            </div>
            <button type="submit">Submit</button>
        </form>
        {fullname && <p>Full Name: {fullname}</p>}
        </div>
    )
 }
 export default FullName