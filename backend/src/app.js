// ************ Require's ************
const express = require("express");
const authRouter = require("./routes/auth.routes");
const productRouter = require("./routes/products");
const comprasRouter = require("./routes/compras");
const checkoutRouter = require("./routes/chekout");

const dashboardRouter = require("./routes/dashboard");
const categoriesRouter = require("./routes/categories");
const userRouter = require("./routes/user.routes");
const cors = require('cors');
const corsOptions = require('./database/config/corsOptions');



// ************ express() - (don't touch) ************
const app = express();
require("dotenv").config();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// ************ Middlewares - (don't touch) ************
app.use(express.static(__dirname + "../public"));
app.use(cors(corsOptions));
app.use(cors({
  origin: ["http://localhost:3001"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

//************Rutas******* **/
/* RUTAS QUE FALTAN */
//Carrito de compras (/compras)???
//Dashboard (/dashboard/cliente)
//Dashboard (/dashboard/admin)
// app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/productos", productRouter);
app.use("/compras", comprasRouter);
app.use("/checkout", checkoutRouter);
app.use("/dashboard", dashboardRouter);
app.use("/categorias", categoriesRouter);

//A través del método listen levantamos el servidor. Utilizamos variables de entorno

app.listen(process.env.PORT || 3001, () => {
  console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
