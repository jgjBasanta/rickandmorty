const axios = require('axios');

const getCharById = (res, id)=>{
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((result)=> result.data)
    .then(({ name, gender, origin, image, status, species })=>{
        let character = {
            id,
            name,
            gender,
            origin,
            image,
            status,
            species
        }
        res.writeHead(200, {"Content-type": "application/json"}).end(JSON.stringify(character));
    })
    .catch((error)=>res.writeHead(500, {"Content-type": "text/plain"}).end(error.message));
};

module.exports = {
    getCharById
}