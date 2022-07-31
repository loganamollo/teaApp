import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from '../styles/EditUser.module.css'

export default function EditUser () {
    const router = useRouter()
    const [id, setId] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()
    const [role, setRole] = useState()

    const [user, setUser] = useState()
    const baseUrl='http://localhost:9090/'

    useEffect( () => {
            if (!user) {
                axios.get(`http://localhost:9090/users/${router.query.id}`)
                .then( ({ data }) =>{
                    setUser(data)
                    setName(data['name'])
                    setRole(data['role'])
                    setPassword(data['password'])
                })
                .catch( err => console.log(err) )
            }
            if (!id)  {
                setId(router.query.id)
            }    
    })


    const patchUser = () => {
        axios.patch(
            `${baseUrl}users/${id}`,
            {
                name: name,
                password: password,
                role: role
            } ,
            {headers: {
                'Content-Type': 'application/json'
            }}
        )
        .then( response => console.log(response) )
        .catch( err => console.log(err) )
        router.back()
    }

    
    return (
        <>
            {
                user &&
                <div className={styles.container}>
                    <div>
                        <label for='name' >name</label>
                        <input name="name" type='text' value={name} onChange={ (e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <label for='password' >password</label>
                        <input name="password" type='text' value={password} onChange={ (e) => setPassword(e.target.value)} />
                    </div>

                    <div>
                        <label for='role' >role</label>
                        <input name="role" type='text' value={role} onChange={ (e) => setRole(e.target.value)} />
                    </div>
                    <button onClick={patchUser} className={styles.button}>Save</button>
                </div>
            }
        </>
    )
}