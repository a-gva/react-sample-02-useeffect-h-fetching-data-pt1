import { useState, useEffect } from 'react'
import axios from 'axios'

function DataFetching() {

    const DATA_URL = 'https://jsonplaceholder.typicode.com/posts'

    const [posts, setPosts] = useState([])

    const getData = () => {
        axios.get(`${DATA_URL}`)
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => { console.log(err) })
    }

    useEffect(getData, [])

    return (
        <div>
            <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }

            </ul>
        </div>
    )
    { }
}
export default DataFetching