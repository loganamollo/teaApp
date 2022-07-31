import axios from "axios"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import styles from '../styles/Admin.module.css'




export default function Admin() {
    const [editedTea, setTea] = useState({})
    const [editedUser, setUser] = useState({})
    const [teas, setTeas] = useState()
    const [users, setUsers] = useState()

    const baseUrl='http://localhost:9090/'
    const router = useRouter()
    
    useEffect( () => {
        if (!teas) {
            axios.get(baseUrl + 'teas/')
            .then( response => setTeas(response.data) )
            .catch(err => console.log(err.message))
        }
        if (!users) {
            axios.get(baseUrl + 'users/')
            .then( response => setUsers(response.data) )
            .catch(err => console.log(err.message))
        }
    }) 


    const editTea = (id) => {
        router.push({
            pathname: 'editTea/',
            query: { id: id }
        })
    }
    
    const editUser = (id) => {
        router.push({
            pathname: 'editUser/',
            query: { id: id }
        })
    }


    return (
        <div>
            <h1>Administrator dashboard</h1>
            <section>
                <h2>Tea Packages</h2>
                {   teas &&
                    teas.map( tea => {
                        return (
                        <div className={styles.card} onClick={ () => editTea(tea['_id']) } >
                            <p>Quantity: { tea['quantity'] } Kgs</p>
                            <p>Report : { tea['report'] ? tea['report'] : 'Pending' } </p>
                            <p>Harvest Details : { tea['harvestDetails'] ? tea['harvestDetails'] : 'Pending' } </p>
                            <p>Price : { tea['price'] ? tea['price'] : 'Not set' } </p>
                            <p>Buyer : { tea['report'] ? tea['report'] : 'Pending' } </p>
                            <p>Report : { tea['buyer'] ? tea['buyer'] : 'Not bought yet' } </p>
                        </div>
                        )
                    })
                }
                <hr />
            </section>
            <section>
                <h2 className={styles.text} >Users</h2>
                {
                    users &&
                    users.map( user => {
                        return(
                            <div className={styles.card} onClick={ () => editUser(user['_id']) } >
                                <p>username: {user['name']}</p>
                                <p>id: {user['_id']}</p>
                                <p>role: {user['role']}</p>
                                <p>password: ***********</p>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}