import React,{useState} from "react";
import "../Styles/Home.css";

const Home = () => {

  const [user, setUser] = useState({
    name:"",
    email:"",
    mobile:"",
    address:"",
  })

  const handleChange=(e)=>{
      const {name,value}= e.target;
      setUser((prevState)=>{
        return{
          ...prevState,
          [name] : value
        }
      })
  };
  console.log(user);
  return (
    <div className="home">
      <h1>Enter user Info</h1>
      <br/>
      <form className="home__container">
     
        <input placeholder="Name" value={user.name} name="name" onChange={handleChange}/>
        <br/>
        <br/>
        <input placeholder="Email" value={user.email} name="email" onChange={handleChange}/>
        <br/>
        <br/>
        <input placeholder="Mobile No" value={user.mobile} name="mobile" onChange={handleChange}/>
        <br/>
        <br/>
        <textarea placeholder="Address" value={user.address} name="address" onChange={handleChange}/>
      <br/>
      <br/>
      <button>Sumbit</button>
      </form>
    </div>
  );
};

export default Home;
