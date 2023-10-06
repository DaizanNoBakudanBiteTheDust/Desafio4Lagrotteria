import express from 'express';
import handlebars from 'express-handlebars';
import {
        __dirname
} from './utils.js'
import {
        Server
} from 'socket.io';
import productRouter from './routes/api/products.router.js';
import cartRouter from './routes/api/cart.router.js';
import viewRouter from './routes/web/views.router.js';

// Crea server express
const app = express();

//Servidor archivos estaticos

app.use(express.static(`${__dirname}/public`))

//middleware
app.use(express.json({}));
app.use(express.urlencoded({
        extended: true
}));


// handlebars

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')


// Llama a la ruta de product Router (Todo lo hecho hasta ahora)
app.use('/api/products', productRouter);

// Ruta carts
app.use('/api/carts', cartRouter);

// Ruta view
app.use('/web/views', viewRouter);



const Server = app.listen(8080, () => console.log("listening en 8080"));

// IO

const socketServer = new Server();