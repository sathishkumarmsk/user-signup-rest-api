import { Router } from "express";
import req from "express/lib/request";
import res from "express/lib/response";
import db from "../models";

const router = Router();

/*const data = [
    {
        id: 1,
        UserName: "Msk",
        Password: "1234",
        LoginOn: new Date(),
    }
]
*/


router.get('/', async (req,res) => {
    const signin = await db.signin.findAll()
    if(signin) {
        return res.status(200).json(signin)
    }
    return res.sendStatus(404);

});

router.get('/:id', async (req,res) => {
    const signin = await db.signin.findBypk(req.params.id);
    if (signin) {
        return res.status(200).json(findData);
    }
    return res.sendStatus(404);
});

router.post('/', async (req, res) => {
    try {
        const signinData = {
        UserName: req.body.UserName,
        Password: req.body.UserName,
        LoginOn: new Date().toDateString(),

        }
        const signin = await db.signin.create(signinData);
        if (signin) {
            return res.status(201).json(signin)
        }
        return res.sendStatus(404);
    }
    catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const signin = await db.signin.update({

            LoginOn: new Date().toDateString(),

        },{
            where: {
                id: req.params.id,
            }
        });
        if (signin) {
            return res.status(200).json(signin);
        }
        return res.sendStatus(404);
    }
    catch (error) {
        console.log(error);
    }
});

router.delete('/:id', async (req,res) => {
    try {
        const signin = await db.signin.destroy({
            where: { id: req.params.id },
        })

        if (signin) {
            return res.status(200).json(signin);

        }
        return res.sendStatus(404);
    }
    catch (error) {
        console.log(error);
    }
})

export default router;