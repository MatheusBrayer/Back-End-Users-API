import { pool } from "../database/connection";

export class UserRepository {
    async createUser (name: string, email: string, password: string) {
        const result = await pool.query(
            "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id",
            [name, email, password]
        );
        return result.rows[0];
    }

    async findAllUsers () {
        const result = await pool.query("SELECT * FROM users");
        return result.rows;
    }

    async findByID (id: number) {
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]);
        return result.rows[0];
    }
}
