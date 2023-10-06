import express from 'express';
import handlebars from 'express-handlebars';
import { __dirname } from './utils.js'
import productRouter from './routes/api/products.router.js';
import cartRouter from './routes/api/cart.router.js';

// Crea server express
const app = express();

//middleware
app.use(express.json({}));
app.use(express.urlencoded({
        extended: true
}));

// handlebars

app.engine('handlebars', handlebars.engine())
app.set('views', `${__dirname}/views`)
app.set('view engine', 'handlebars')


app.use(express.static('public'))

// Llama a la ruta de product Router (Todo lo hecho hasta ahora)
app.use('/api/products', productRouter);

// Ruta carts
app.use('/api/carts', cartRouter);



app.listen(8080, () => console.log("listening en 8080"));

