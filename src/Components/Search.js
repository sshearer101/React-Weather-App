import {useState} from "react"

export default function Search({searchWeather}){
    const [search, setSearch] = useState('')

    function handleSubmit(e){
        e.preventDefault()
        searchWeather(search)
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
                onKeyPress={searchWeather}
           />

        </form>
    )
}