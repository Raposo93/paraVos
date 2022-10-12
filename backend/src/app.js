// ************ Require's ************
const express = require("express");
const indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
const productRouter = require("./routes/products");
const comprasRouter = require("./routes/compras");
const checkoutRouter = require("./routes/chekout");
const dashboardRouter = require("./routes/dashboard");






// ************ express() - (don't touch) ************
const app = express();
const port = 3000;

//************Rutas******* **/
//Inicio ( / )
//Productos (/productos)
//Detalle del Producto (/productos/detalle)
//Carrito de compras (/compras)
//Checkout (/checkout)
//niciar Sesión (/login)
//Registro (/registrar)
//Dashboard (/dashboard/cliente)
//Dashboard (/dashboard/admin)
app.use("/",indexRouter);
app.use("/",authRouter);
app.use("/productos", productRouter);
app.use("/compras", comprasRouter);
app.use("/checkout", checkoutRouter);
app.use("/dashboard", dashboardRouter)


//A través del método listen levantamos el servidor
app.listen(port, () => {
  console.log("Estoy ejecutando en http://localhost:3000 ");
});
