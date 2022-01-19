import { Router } from "express";
import { route } from "express/lib/application";
import res from "express/lib/response";
import db from "../models";
// import res from "express/lib/response";
// import { DATE } from "sequelize/dist";

const router = Router();

/*const data = [
    {
        id: 1,
        FirstName: "msk",
        LastName: "sathish",
        UserName: "ms_sathish",
        Password: "msk1234",
        ConformPassword: "msk1234",
        createdOn: new Date(),


    },
    {
        id: 2,
        FirstName: "sathish",
        LastName: "msk",
        UserName: "msk_sathish",
        Password: "msk12345",
        ConformPassword: "msk12345",
        createdOn: new Date(),


    }
]
*/

router.get('/', async (req, res) => {
    const signup = await db.signup.findAll()
    if (signup) {
        return res.status(200).json(signup)
    }
    return res.sendStatus(404);
});

/*
router.get('/', (req, res) => {
    res.status(200).json(data);
});
*/

router.get('/:id', async (req, res) => {
    // const findData = data.find(item => item.id === parseInt(req.params.id));
    const signup = await db.signup.findBypk(req.params.id);
    if (signup) {
        return res.status(200).json(findData);

    } 
    return res.sendStatus(404);
    
});

router.post('/', async (req, res) => {
    /* const itemId = data.length + 1 ;

    const newData = {
        id: itemId,
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Password: req.body.UserName,
        ConformPassword: req.body.ConformPassword,
        createdOn: new Date(),

    }

    data.push(newData);
    */
   try {
       const signupData = {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        UserName: req.body.UserName,
        Password: req.body.UserName,
        ConformPassword: req.body.ConformPassword,
        createdOn: new Date().toDateString(),


       }
       const signup = await db.movie.create(signupData);
       if (movie) {
           return res.status(201).json(signup)
       }
       return res.sendStatus(404);

   }
   catch (error) {
       console.log(error);
   }

    
});

router.put('/:id', async (req, res) => {
    /* 
    const findData = data.find(item => item.id === parseInt(req.params.id));

    if (findData) {
        const updateData = {
            id: findData.id,
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            UserName: req.body.UserName,
            Password: req.body.Password,
            ConformPassword: req.body.ConformPassword,
            createdOn: new Date(),

        }

        const index = data.indexOf(findData);

        data.splice(index, 1, updateData);

        res.sendStatus(204);
    }
    else {
        res.sendStatus(404)
    }
    */
   try {
       const signup = await db.signup.update({
           UserName: req.body.UserName,
           Password: req.body.Password,

           ConformPassword: req.body.ConformPassword,

       },{
           where: {
               id: req.params.id,
           }
       });
       if (signup) {
           return res.status(200).json(movie)
       }
       return res.sendStatus(404);
   }
   catch (error) {
       console.log(console.log(error))
   }
});


router.delete('/:id', async (req,res) => {
   /* const findData = data.find(item => item.id === parseInt(req.params.id));

    if (findData) {
        const index = data.indexOf(findData);
        data.splice(index, 1);

        res.sendStatus(204);
    }
    else {
        res.sendStatus(404);
    }
    */
    try {
        const signup = await db.signup.destroy({
            where: { id: req.params.id },
        })

        if (signup) {
            return res.status(200).json(movie);
        }
    
        return res.sendStatus(404);
    } catch (error) {
        console.log(error);
    }
});

export default router;