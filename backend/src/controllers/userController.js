const db = require("../database/models");

const controller = {
 
 //Lista de usuarios
getUsers: (req, res) => {
    db.User.findAll()
    .then((users) => {
        let respuesta = {
          meta: {
            total: users.length,
            status: 200,
          },
          data: users, 
        };
        return res.status(200).json(respuesta);
      });
},
 //consulto un usuario en particular
 show: (req, res) => {
    db.User.findByPk(req.params.id)
    .then((user) => {
      let respuesta = {
        meta: {
          status: 200,
        },
        data: user, 
      };
      return res.status(200).json(respuesta);
    });
},
//  //Creo al usuario
// store: async (req, res) => {
//     try {
//       const { firstname, lastname, address_mail, password, rol_user, photo_perfil, phone_number} = req.body;
//       const resDetail = await Users.create({
//         firstname,
//         lastname,
//         address_mail,
//         password,
//         google_id, 
//         rol_user, 
//         photo_perfil, 
//         phone_number

//       });
//       res.send({ data: resDetail });
//     } catch (e) {
//       httpError(res, e);
//     }
// },
//Edito los datos del usuario
update: async (req, res) => {
    await db.User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((user) => {
      return res.json({
        data: user,
        status: 200,
        Edited: "OK!!",
      });
    });
},
 //Elimino al usuario 
destroy: async (req, res) => {
    await db.User.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.json({ mensaje: "Se borró el usuario" });
  },
  

 }; 

module.exports = controller;

