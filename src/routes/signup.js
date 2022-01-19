import { Router } from "express";
import { route } from "express/lib/application";
import res from "express/lib/response";
// import res from "express/lib/response";
// import { DATE } from "sequelize/dist";

const router = Router();

const data = [
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

router.get('/', (req, res) => {
    res.status(200).json(data);
});

router.get('/:id', (req, res) => {
    const findData = data.find(item => item.id === parseInt(req.params.id));
    if (findData) {
        res.status(200).json(findData);

    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    const itemId = data.length + 1 ;

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

    res.status(201).json(newData);
});

router.put('/:id', (req, res) => {
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
})

export default router;