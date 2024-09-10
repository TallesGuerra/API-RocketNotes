const { Router } = require("express");
const  multer = require("multer");
const uploadConfig = require("../configs/upload")

const UsersController = require("../controllers/usersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");

const usersRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController();

/* 
    put » quando queremos atualizar propriedades dentro do banco de dados
    patch » quando queremos atualizar um campo específico dentro do banco de dados.
*/

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
    console.log(request.file.filename);
    response.json();
})

module.exports = usersRoutes;