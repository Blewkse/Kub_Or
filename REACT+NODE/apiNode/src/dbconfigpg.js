const {Client} = require('pg')
require('dotenv').config()

const client = new Client({
    host: process.env.pgHost,
    user: process.env.pgUser,
    port: process.env.pgPort,
    password: process.env.pgPassword,
    database: process.env.pgDatabase
})

client.connect();

module.exports= {
    
    getMovies: async (req, res) =>{
        client.query('Select * from movies', (err,res2)=>{
            if(!err){
                res.status(200).send({reponse: res2.rows})
            }else{
                res.status(404).send({erreur: err})
            } 
            client.end;
        })
    },

    addMovie: async (req, res) => {
        const {name, realisator} = req.body;
        console.log(name, realisator);
        if(!name || !realisator){
            return;
        }
        client.query('Insert into movies (name,realisator) values($1,$2) returning *', [name, realisator], (err, res) => {
            if(err){
                console.error(err.stach);
            }else {
            console.log(res.rows);
            }
        })
        res.status(200).send("film added");
    }
}
