import { UserRepository } from "./repositories/UserRepository";

async function testRepository() {
  try {
    const repo = new UserRepository();

    // 🔥 TESTE CREATE
    const user = await repo.createUser(
      "Matheus",
      "matheus@test.com",
      "123456"
    );

    console.log("✅ Criado:", user);

    // 🔥 TESTE FIND ALL
    const users = await repo.findAllUsers();
    console.log("📋 Lista:", users);

  } catch (error) {
    console.error("❌ Erro:", error);
  }
}

testRepository();
