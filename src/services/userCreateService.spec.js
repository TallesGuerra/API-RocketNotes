const UserCreateService = require('./UserCreateService')
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory");
const AppError = require("../utils/AppError")
/* const { describe } = require('pm2'); */


describe("UserCreateService", () => {
    let userRepositoryInMemory = null;
    let userCreateService = null;

    beforeEach(() => {
        userRepositoryInMemory = new UserRepositoryInMemory();
        userCreateService = new UserCreateService(userRepositoryInMemory);
    })


    it("user should be create", async () => {
        const user = {
            name: "User test",
            email: "user@email.com",
            password: "123"
        };

        const userCreated = await userCreateService.execute(user);
        expect(userCreated).toHaveProperty("id");
    });

    it("the user shouldn't be created with a existent email.", async () => {
        const user1 = {
            name: "User Test 1",
            email: "user@test.com",
            password: "123"
        };

        const user2 = {
            name: "User Test 2",
            email: "user@test.com",
            password: "456"
        };

        await userCreateService.execute(user1);
        await expect(userCreateService.execute(user2)).rejects.toEqual
        (new AppError("Este e-mail já esta em uso."));
    });
});

