import { Router } from "express";

const router = Router();

const data = [
    {
        id: 1,
        FirstName: "msk",
        LastName: "sathish",
        UserName: "ms_sathish",
        Password: true,
        createdOn: new Date(),


    }
]

router.get('/', (req, res) => {
    res.status(200).json(data);
});

export default router;