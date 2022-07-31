import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import styles from '../styles/EditTea.module.css'

export default function EditTea () {
    const router = useRouter()
    const [id, setId] = useState()
    const [harvestDetails, setHarvestDetails] = useState()
    const [report, setReport] = useState()
    const [price, setPrice] = useState()

    const [tea, setTea] = useState({})
    const baseUrl='http://localhost:9090/'

    useEffect( () => {
            if (!tea) {
                axios.get(`http://localhost:9090/teas/${router.query.id}`)
                .then( response =>{
                    setTea(response.data)
                    try {
                        setHarvestDetails(tea['harvestDetails'])
                        setPrice(tea['price'])
                        setReport(tea['report'])
                    } catch (err) {
                        console.log(err.message)
                    }
                })
                .catch( err => console.log(err) )
            } 
            if (!id)  {
                setId(router.query.id)
            }    
    })


    const patchTea = () => {
        axios.patch(
            `${baseUrl}teas/${id}`,
            {
                harvestDetails: harvestDetails,
                report: report,
                price: price
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
                tea &&
                <div className={styles.container}>
                    <div>
                        <label for='harvestDetails' >harvest details</label>
                        <input name="harvestDetails" type='text' value={harvestDetails} onChange={ (e) => setHarvestDetails(e.target.value)} />
                    </div>

                    <div>
                        <label for='report' >report</label>
                        <input name="report" type='text' value={report} onChange={ (e) => setReport(e.target.value)} />
                    </div>

                    <div>
                        <label for='price' >price</label>
                        <input name="price" type='number' value={price} onChange={ (e) => setPrice(e.target.value)} />
                    </div>
                    <button onClick={patchTea} className={styles.button}>Save</button>
                </div>
            }
        </>
    )
}