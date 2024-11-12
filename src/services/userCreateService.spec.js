const UserCreateService = require('./UserCreateService')

it("user should be create", async () => {
    const user = {
        name: "User test",
        email: "user@email.com",
        password: "123"
    };     

    const userCreateService = new UserCreateService();
    const userCreated = await userCreateService.execute(user);

    expect(userCreated).toHaveProperty("id");

});

