import { Request, Response } from 'express';
import EmailService from '../services/EmailService';

const users = [
  { name: 'Fabio', email: 'fabio.bressler@gmail.com' },
];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { 
        name: 'Fabio Bressler', 
        email: 'fabio.bressler@gmail.com' 
      },
      message: { 
        subject: 'Typescrypt intro', 
        body: 'Welcome!' 
      }
    });
    res.json({message: 'Done!'});
  }

};
