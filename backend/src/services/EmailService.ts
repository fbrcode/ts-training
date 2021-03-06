interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;
  attachment?: string[]// ? means optional
}

interface IMessageDTO { // DTO = Data Transfer Object (Metodologia DDD ou Domain Driven Design)
  to: IMailTo;
  message: IMailMessage;
}

interface IEmailService {
  sendMail(request: IMessageDTO): void;
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO ) {
    console.log(`Email sent to ${to.name}: ${message.subject} `);
  }
}

export default EmailService;