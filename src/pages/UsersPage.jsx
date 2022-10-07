import axios from "axios"
import {useEffect,useState} from "react"

const UsersPage =()=>{

    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(result=>setUsers(result.data))
    },[users])

    useEffect(()=>{
        console.log("users list",users)
    },[users])

    return(<div>
        {users.map(user=><div>{user.name}</div>)}
    </div>)
}

export default UsersPage