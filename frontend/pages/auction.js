import axios from "axios"
import { Router, useRouter } from "next/router"
import { useEffect, useState } from "react"
import styles from '../styles/Auction.module.css'

export default function Auction () {
    const [teas, setTeas] = useState()
    const [userId, setUserId] = useState()
    const [userName, setUserName] = useState()
    const [error, setError] = useState()
    const router = useRouter()

    useEffect( () => {
        if(!teas) {
            axios.get('http://localhost:9090/teas/')
            .then( ({data}) => setTeas(data) )
            .catch( err => console.log(err.message) )
        }
        if (!userId) {
            setUserId(router.query.userId)
        }
    })

    const buyTea = (id) => {
        // axios.patch(
        //     `http:localhost:9090/teas/${id}`,
        //     {
        //         buyer: userId
        //     },
        //     { headers: { 'Content-Type': 'application/json' }}
        // )
        let username
        axios.get(
            `http://localhost/users/${userId}`
        )
        .then( response => {
            console.log(response.data)
            if (!userName) { setUserName(response.data['name']) }
        })
        .catch( err => {
            console.log(err)
            setError(err.message + 'slow network. RequestTimeOUt 403')
        })
    }

    return (
        <section>
            <h1>Tea Auction</h1>
            <div>
                {
                    teas &&
                    teas.map( tea => {
                        return (
                        <div key={tea['_id']} className={styles.card} >
                            <p>Quantity: { tea['quantity'] } Kgs</p>
                            <p>Report : { tea['report'] ? tea['report'] : 'Pending' } </p>
                            <p>Harvest Details : { tea['harvestDetails'] ? tea['harvestDetails'] : 'Pending' } </p>
                            <p>Type: { tea['type'] ? tea['type'] : 'Not set' }</p>
                            <p>Buyer : { tea['buyer'] ? userName : 'Not bought yet' } </p>
                            <p>Price : { tea['price'] ? tea['price'] : 'Not set' } </p>
                            {
                                tea['price'] &&
                                <button className={styles.button} onClick={ (tea) => buyTea(tea['_id']) } >Buy</button>
                            }
                            {
                                error && <p className={styles.error} >{error}</p>
                            }
                        </div>
                        )
                    })
                }
            </div>
        </section>
    )
}