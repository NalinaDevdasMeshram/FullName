import { useState } from "react";
const FullName = ()=>{
    const [formData, setFormData] = useState({firstname:'', lastname:''});
    const [fullname, setFullname] = useState('')
    const handleChange =(e)=>{
          const {name, value} = e.target;
          setFormData({...formData,
            [name]:value,
          });
    }
   const handleSubmit =(e)=>{
       e.preventDefault();
      setFullname (`${formData.firstname} ${formData.lastname}`);
    //   e.preventDefault();
        // setFormData({firstname:'', lastname:''})
        
    }
    return (
        <div>
            <form onSubmit = {handleSubmit}>
            <h1>Full Name Display</h1>
            <div>
            First Name: <input type="text" name="firstname" id="firstname"  value={formData.firstname} 
            onChange={handleChange}required/>
           </div>
           <div>
            Last Name: <input type="text" name="lastname"  id="lastname"  value={formData.lastname}  
            onChange={handleChange}required/>
            </div>
            <button type="submit"> Submit </button>
        </form>
        {fullname && <p>Full Name: {fullname} </p>}
        </div>
        
    )
 }
 export default FullName