import buyer from "../../models/buyers/buyerModel.js";

export const registerBuyer = async (req,res) => {
    try {
        const {name, address, email, password} = req.body;

        const newBuyer = new buyer({name, address, email, password})
        await newBuyer.save();

        return res.status(200).json(newBuyer)

    } catch (error) {
        return res.status(500).json(error)
    }
}