import { UserRepository } from "../repositories/UserRepository";

export class UserService {
    private repository = new UserRepository();


    async createUser(name: string, email: string, password: string) {

        if (!email.includes("@")) {
            throw new Error("Email inválido");
        }

        const existingUser = await this.repository.findByEmail(email);

        if (existingUser) {
            throw new Error("Email já cadastrado");
        }

        if (password.length < 6) {
            throw new Error("Senha deve ter no mínimo 6 caracteres");
        }

        return this.repository.create(name, email, password);
    }


    async listUsers() {
        return this.repository.findAll();
    }

    async getUserById(id: number) {

        const user = await this.repository.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        return user;
    }


    async updateUser(id: number, name: string, email: string, password: string) {

        const user = await this.repository.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        const emailAlreadyUsed = await this.repository.findByEmail(email);

        if (emailAlreadyUsed && emailAlreadyUsed.id !== id) {
            throw new Error("Email já cadastrado");
        }

        return this.repository.update(id, name, email, password);
    }


    async deleteUser(id: number) {

        const user = await this.repository.findById(id);

        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        return this.repository.delete(id);
    }
}
