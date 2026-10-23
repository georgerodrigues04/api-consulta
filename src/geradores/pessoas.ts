import { faker } from "@faker-js/faker/locale/pt_BR";
import UserAgent  from "user-agents";

const userAgent = new UserAgent();
const nome = faker.person.firstName();
const sobrenome = faker.person.lastName();
const email = faker.internet.email();
const senha = faker.internet.password();


export const DadosPessoais = {
    nome,
    sobrenome,
    email,
    senha,
    userAgent: userAgent.toString()
};


