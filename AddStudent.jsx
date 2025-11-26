import { useState } from "react";
import axios  from "axios"
function AddStudent() {
  const[a,x]=useState("");
  const[b,y]=useState("");
  const[c,z]=useState("");
    const[d,w]=useState("");

  const savedata=(e)=>{
   //http://localhost:7017/api/Student
   e.preventDefault();
   axios.post("http://localhost:7017/api/Student", {
    FullName: a,
    Email: b,
    Mobile: c,
    City: d
})
.then(response => {
    console.log("Data Saved Successfully");
})
.catch(error => {
    console.error("Request failed:", error.message);
});



  }
  return (
    <div className="fb">
      <form onSubmit={savedata}>
        <h1>Register Here</h1><br></br>
        <label htmlFor="fullName">Full name</label>
        <input type="text" id="fullName" value={a} onChange={(e)=>x(e.target.value)} name="fullName" required />
        <br />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={b} onChange={(e)=>y(e.target.value)} name="email" required />
        <br />

        <label htmlFor="mobile">Mobile</label>
        <input type="tel" id="mobile" value={c} onChange={(e)=>z(e.target.value)} name="mobile" required />
        <br />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={d} onChange={(e)=>w(e.target.value)} name="city" required />
        <br />

       <center> <button type="submit"  className="btn btn-outline-primary">Submit</button></center>
      </form>
    </div>
  );
}

export default AddStudent;