import { useEffect, useState } from 'react'
// useEffect
// api
// https://www.omdbapi.com/?t=yariyaan&apikey=your apikey  

const Index = () => {
// practic purpose
useEffect(() =>{
    // console.log("hello")
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data)=> {
        // console.log(data);
    })
    .catch((expect) => {
        console.log(expect);
    })
},[])


    // call api in movies
    const [moviename,setMoviename] = useState("")
    const [serchname,Setserchname] = useState("yariyaan")
    
    useEffect(() => {
        findname();
    },[])

    const name = (value) => {
        Setserchname(value)
    }

    const findname = () => {
        let feacthapi = `https://www.omdbapi.com/?t=${serchname}&apikey=9392a286`
        fetch(feacthapi)
            .then((response) => response.json())
            .then((data) => {
                setMoviename(data)
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div className="container">
            <h2 className="text-center">Movie Searches</h2>
            <div class="input-group col-lg-6">
                <input class="form-control" type="search" placeholder="Search" onChange={(e) => { name(e.target.value) }} aria-label="Search" /><button onClick={findname} class="btn btn-outline-warning">Search</button>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div class="card" style={{ width: "18rem;" }}>
                        <img class="card-img-top" src={moviename.Poster} alt="Card caps" />
                        <div class="card-body">
                            <h5 class="card-title">{moviename.Title}</h5>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div class="card-body">
                        <h5 class="card-title">Year:{moviename.Year}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Actors:{moviename?.Actors}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Box-oofice:{moviename?.BoxOffice}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Country:{moviename?.Country}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">DVD:{moviename?.DVD}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Director:{moviename?.Director}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Writer:{moviename?.Writer}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">imdbRating:{moviename?.imdbRating}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Metascore:{moviename?.Metascore}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Plot:{moviename?.Plot}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">Production:{moviename?.Production}</h6>
                        
                        <p class="card-text">
                            {/* <strong>Source:{moviename.Ratings[0].Source}</strong> */}
                            {/* <strong>Values:{moviename.Ratings[0].Value}</strong> */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index
