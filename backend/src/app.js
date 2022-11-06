// ************ Require's ************
const express = require("express");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const comprasRouter = require("./routes/compras");
const checkoutRouter = require("./routes/chekout");
const dashboardRouter = require("./routes/dashboard");
const categoriesRouter = require("./routes/categories");


require("dotenv").config();
// ************ express() - (don't touch) ************
const app = express();

//app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//************Rutas******* **/
/* RUTAS QUE FALTAN */
//Carrito de compras (/compras)
//niciar Sesión (/login)
//Registro (/registrar)
//Dashboard (/dashboard/cliente)
//Dashboard (/dashboard/admin)
app.use("/", indexRouter);
app.use("/", authRouter);
app.use("/productos", productRouter);
app.use("/compras", comprasRouter);
app.use("/checkout", checkoutRouter);
app.use("/dashboard", dashboardRouter);
app.use("/categorias", categoriesRouter);

/* Vista no encontrada */
app.use(function (err, req, res, next) {
  console.log(err);
  if (err["view"] != null) {
    console.error("errorView", err.message);
    return res.render("errors/500");
  }
  return next();
});


//A través del método listen levantamos el servidor. Utilizamos variables de entorno


app.listen(3001, () => {
  console.log("Servidor funcionando ");
})
