import {useState} from "react"

export default function Search(){
    const [search, setSearch] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        console.log(search)
        setSearch('')
    }
    return(
        <form class="search-form" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
           />

        </form>
    )
}