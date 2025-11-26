import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ViewStudent() {
  const [students, setStudents] = useState([]); 

  useEffect(() => {
    
    axios.get("http://localhost:7017/api/Student")
      .then((response) => {
        console.log(response.data);
        setStudents(response.data); 
      })
      .catch(error => {
        console.error("Request failed:", error.message);
      });
  }, []); 

  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:7017/api/Student/${id}`);

    
    setStudents((prev) => prev.filter((s) => s.studentId !== id));
    alert("Deleted!");
  } catch (error) {
    console.error("Delete failed:", error.message);
    alert("Error deleting student");
  }
};


  return (
    <div>
      <center><h2>Student List</h2></center>
      <div className="v">
        <table className="table table-success table-striped">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>City</th>
              <th>Actions</th>
            </tr>
          </thead>
         <tbody>
  {students.map((student) => (
    <tr key={student.studentId}>
      <td>{student.studentId}</td>   
      <td>{student.fullName}</td>
      <td>{student.email}</td>
      <td>{student.mobile}</td>
      <td>{student.city}</td>
      <td>
  <div className="action-buttons">
    <Link to={`/edit/${student.studentId}`}>
      <button className="btn-edit">Edit</button>
    </Link>
    <button
      className="btn-delete"
      onClick={() => handleDelete(student.studentId)}>
      Delete
    </button>
  </div>
</td>

    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}

export default ViewStudent;
