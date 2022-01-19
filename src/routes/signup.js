import { Router } from "express";
import res from "express/lib/response";

const router = Router();

const data = [
    {
        id: 1,
        FirstName: "msk",
        LastName: "sathish",
        UserName: "ms_sathish",
        Password: true,
        createdOn: new Date(),


    },
    {
        id: 2,
        FirstName: "sathish",
        LastName: "msk",
        UserName: "msk_sathish",
        Password: true,
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
})

export default router;