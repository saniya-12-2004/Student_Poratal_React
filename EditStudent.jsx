import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./EditStudent.css";   

function EditStudent() {
  const { id } = useParams();   
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");

  //fetch
  useEffect(() => {
    axios.get(`http://localhost:7017/api/Student/${id}`)
      .then((response) => {
        const s = response.data;
        setFullName(s.fullName);
        setEmail(s.email);
        setMobile(s.mobile);
        setCity(s.city);
      })
      .catch(error => console.error("Request failed:", error.message));
  }, [id]);

  // Update 
  const saveData = (e) => {
    e.preventDefault();

    const updatedStudent = {
      id,
      fullName,
      email,
      mobile,
      city
    };

    axios.put(`http://localhost:7017/api/Student/${id}`, updatedStudent)
      .then(() => {
        alert("Student updated successfully!");
        navigate("/viewstudent"); 
      })
      .catch(error => console.error("Update failed:", error.message));
  };

  return (
    <div className="b">
      <form onSubmit={saveData}>
        <h1>Edit Student</h1>

        <label htmlFor="fullName">Full name</label>
        <input type="text" id="fullName" value={fullName} onChange={(e)=>setFullName(e.target.value)} required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

        <label htmlFor="mobile">Mobile</label>
        <input type="tel" id="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} required />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={city} onChange={(e)=>setCity(e.target.value)} required />

        <button type="submit" className="btn btn-outline-success">Update</button>
      </form>
    </div>
  );
}

export default EditStudent;
