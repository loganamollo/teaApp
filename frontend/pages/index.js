import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState()
  const [teas, setTeas] = useState()
  const baseUrl='http://localhost:9090/'
  
  
  useEffect( () => {
    let userId
    userId = router.query.userId
    if (!userId){
      router.push('/login')
    }
    if (user) {
      if (!teas) {
        axios.get(baseUrl + 'teas/')
        .then( response => {
          let loadedTeas = []
          response.data.forEach( item => {
            if (item.farmer === user['_id']){
              loadedTeas.push(item)
            }
            setTeas(loadedTeas)
          })
        })
        .catch( err => console.log(err.message) )
      }
    } else {
      axios.get(baseUrl + `users/${userId}`)
      .then( response => setUser(response.data) )
      .catch( err => console.log(err.message) )
    }
  })


  return (
    <div styles={styles.container} >
      { user && <h1 className={styles.text}>Welcome {user['name']}</h1> }
      {
        teas &&
        <div className={styles.teas} >
        <h2 className={styles.text}>Your Tea Harvests</h2>
        {
          teas.map( tea => {
            return (
              <div className={styles.teaCard}>
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
      </div>
      }
    </div>
  )
}
