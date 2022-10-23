import { Request, Response } from "express";
import EmailService from "../services/EmailService";

const users = [
    {name: "Josef", email: "josef@gmail.com"},
]


export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService();

        emailService.sendMail({to:
            {
            name: 'Belly', 
            email:'Belly@gmail.com'
            },
            message: 
            {
                subject: 'Welcome to our software', 
                body: 'Thank you for visitiing us'
            }
        })
    
        return res.send()
        
    }

    
};