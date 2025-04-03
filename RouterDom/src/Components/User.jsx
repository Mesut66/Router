import {useState , useEffect} from "react";
import { useParams } from "react-router-dom";

function User(){
    const {id} = useParams();// bu hook url deki id yi verir

    const [user,setUser] = useState({});

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
        .then((res) => res.json())
        .then((data) => setUser(data));
    },[id]); // [id] diyerek id değiikenini takip et dedim. Yoksa datayı bir kere çekiyor.
    return(
        <>
            <div className="row">
                <div className="col-12">
                    <h2>Users Details</h2>
                    <hr />
                </div>
                <div className="col-12">
                    <div><b>Name : </b><span>{user.name}</span></div>
                    <div><b>User Name : </b><span>{user.username}</span></div>
                    <div><b>E-mail : </b><span><a href={"mailto:" + user.email} target="_blank">{user.email}</a></span></div>
                    <div><b>Web Site : </b><span>{user.website}</span></div>
                </div>
            </div>
        </>
    );
}

export default User;