
window.onload = () => {
    axios({
        method : 'get',
        url : `https://maps.googleapis.com/maps/api/place/nearbysearch/json`,
        params : {
            keyword : "hotel",
            location : "-.33.8670522%2C151.1957362",
            radius : "1500",
            type : "lodging",
            key : 'AIzaSyAdukdB6pwDKHEgqaGghV7TfqwtbDEfJRo'
        },
        headers : {
            origin : "https://hotel-api-test.vercel.app"
        }
    })
    .then(response => {console.log(response)})

}