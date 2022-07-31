import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../styles/Login.module.css'
import axios from 'axios'

export default function Login () {
    const router = useRouter()
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState()

    const handleClick = () => {
        router.push('/signUp')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        axios.get('http://localhost:9090/users/')
        .then( ({ data }) => {
            console.log(data)
            data.forEach( item => {
                if (item['name'] === name){
                    if (item['password'] === password) {
                        setError('')
                        if (item['role'] == 'farmer') {
                            router.push({
                                pathname: '/',
                                query: { userId: item['_id']}
                            })
                        } else if(item['role'] == 'admin') {
                            router.push({
                                pathname: '/admin',
                                query: { userId: item['_id']}
                            })
                        } else if(item['role'] == 'buyer') {
                            router.push({
                                pathname: '/auction',
                                query: { userId: item['_id']}
                            })
                        }
                    } else {
                        setError('wrong password')
                    }
                } else {
                    setError('username not found')
                }
            })
        })

        
        // axios.get('http://localhost:9090/users')
        // .then( response => {
        //     let found = false
        //     response.data.forEach( item => {
        //         if (item.name === name) {
        //             if (item.password === password) {
        //                 router.push({
        //                     pathname: '/',
        //                     query: {userId: item['_id']}
        //                 })
        //             } else {
        //                 setError('wrong password')
        //             }
        //         }
        //     })
        // })
        // .catch( err => console.log(err.message) )
        
    }

    return (
        <div className={styles.container} >
            <section className={styles.buttonGroup} >
                <button className={styles.login} >Login</button>
                <button onClick={handleClick}>Sign Up</button>
            </section>
            <form onSubmit={handleSubmit} >
                <input onChange={ (e) => setName(e.target.value)} type='text' placeholder='username' value={name}/>
                <input onChange={ (e) => setPassword(e.target.value)} type='password' placeholder='password' value={password} />
                <button className={styles.complete} type='submit' value='Submit'>Log in</button>
            </form>
            {
                error && <p className={styles.error} >{error}</p>
            }
        </div>
    )
}