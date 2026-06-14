import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload { //definição da interface para o payload do contato com email e message.
    email: string;
    message: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? ""; // URL que vamos permitir fazer a requisicão em nossa função. 
const corsHeaders = (origin: string) => ({ //definição dos headers CORS
    "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin, //Permite a origem especificada ou a origem da requisição
    "Access-Control-Allow-Headers": "Content-Type",//Permite o header Content-Type
    "Access-Control-Allow-Methods": "POST, OPTIONS", //Permite os métodos POST e OPTIONS
});

// padoão de tipagem dos objetos de resposta da função lambda, com statusCode, headers e body.
const handler: Handler = async (event: HandlerEvent) => {
    const origin = event.headers["origin"] ?? "";
    //lógica para disparar o email usando o nodemailer.
    //...
    if (event.httpMethod === "OPTIONS") {
        return {
            statusCode: 204,
            headers: corsHeaders(origin), //requisiçao ok.
            body: "",
        };
    }

    if (event.httpMethod !== "POST") { //tudo o que for diferente de POST, retorna método não permitido.
        return {
            statusCode: 405, //método não permitido.
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "Método não permitido." }),
        };
    }
    // event.body = event.body || ""; //garante que o corpo da requisição seja uma string, mesmo que seja undefined.
    let payload: ContactPayload; //variável para armazenar o payload do contato, que deve conter email e message.

    try {
        payload = JSON.parse(event.body ?? "{}");//tenta parsear o corpo da requisição como JSON, se falhar, retorna um erro de corpo inválido.
    } catch {
        return {
            statusCode: 400, //bad request, corpo inválido.
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "Body inválido." }),//retorna um erro de corpo inválido.
        };
    }

    const { email, message } = payload;//desestruturação do objeto payload para obter email e message.

    if (!email?.trim() || !message?.trim()) {//verifica se email ou message estão faltando ou vazios, retornando um erro de campos obrigatórios.
        return {
            statusCode: 422,//unprocessable entity, campos obrigatórios faltando ou vazios.
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "Campos obrigatórios: email, message." }),//retorna um erro de campos obrigatórios.
        };
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//expressão regular para validar o formato do email, garantindo que seja um email válido.
    if (!emailRegex.test(email)) {//valida o formato do email usando a expressão regular, retornando um erro de email inválido se não passar na validação.
        return {
            statusCode: 422,//email inválido.
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "E-mail inválido." }),
        };
    }

    const transporter = nodemailer.createTransport({//configuração do transporte de email usando as variáveis de ambiente para SMTP.
        host: process.env.SMTP_HOST, //host do servidor SMTP, definido na variável de ambiente SMTP_HOST.
        port: Number(process.env.SMTP_PORT ?? 587),//porta do servidor SMTP, definida na variável de ambiente SMTP_PORT, com um valor padrão de 587 se não estiver definida.
        secure: process.env.SMTP_SECURE === "true",//indica se a conexão deve ser segura (SSL/TLS), definida na variável de ambiente SMTP_SECURE, convertida para booleano.
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    try {//bloco que realiza o disparo do email usando o método sendMail do transporter, com as informações do remetente, destinatário, assunto e corpo do email.
        await transporter.sendMail({
            from: `<${process.env.SMTP_USER}>`, //remetente do email, definido na variável de ambiente SMTP_USER.
            replyTo: email,
            to: process.env.CONTACT_EMAIL, // TROCAR destinatário do email, definido na variável de ambiente CONTACT_EMAIL, onde as mensagens de contato serão enviadas.
            subject: "[Esquina do Xis] Nova mensagem Landing Page",
            html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
        });

        return {
            statusCode: 200,//email enviado com sucesso.
            headers: corsHeaders(origin),
            body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
        };
    } catch (error) {//em caso de erro ao enviar o email, loga o erro no console e retorna um erro de falha ao enviar o email.
        console.error("Erro ao enviar e-mail:", error);
        return {
            statusCode: 500,//erro interno do servidor, falha ao enviar o email.
            headers: corsHeaders(origin),
            body: JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
        };
    }
};

export { handler };