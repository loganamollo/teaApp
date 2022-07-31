import axios from 'axios'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/SignUp.module.css'

export default function SignUp () {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [role, setRole] = useState('')
    const [id, setId] = useState('')
    const router = useRouter()

    const baseUrl = 'http://localhost:9090/users/'

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (role == 'farmer' || role == 'buyer') {
            axios.post(
                baseUrl,
                {
                    name: name,
                    password: password,
                    role: role
                },
                {headers: {
                    'Content-Type': 'application/json'
                }}
            )
            .then( response => console.log(response.data) )
            .catch( err => {
                console.log(err)
                setError(err.message)
            })
            router.push('/')
        } else {
            setError('role must be farmer or buyer')
        }
    }

    return (
        <div className={styles.container} >
            <section className={styles.buttonGroup} >
                <button >Login</button>
                <button className={styles.login} >Sign Up</button>
            </section>
            <form onSubmit={ (e) => handleSubmit(e) } >
                <input onChange={ (e) => setName(e.target.value)} type='text' placeholder='username' value={name} required='required' />
                <input onChange={ (e) => setPassword(e.target.value)} type='password' placeholder='password' value={password} required='required' />
                <input onChange={ (e) => setRole(e.target.value)} type='text' placeholder='role: farmer or buyer' value={role} required='required' />
                <button className={styles.complete} type='submit' value='Submit'>Sign up</button>
            </form>
            {
                error && <p className={styles.error} >{error}</p>
            }
        </div>
    )
}