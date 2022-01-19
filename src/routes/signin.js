import { Router } from "express";

const router = Router();

const data = [
    {
        id: 1,
        UserName: "Msk",
        Password: "1234",
        LoginOn: new Date(),
    }
]


router.get('/', (req,res) => {
    res.status(200).json(data);

});

export default router;