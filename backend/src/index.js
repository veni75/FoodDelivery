require('dotenv').config();
const config = require('config');

const logger = require('./config/logger');
const app = require('./server');

const port = process.env.PORT || 3000;

// Authenctication.
const authenticateJwt = require('./auth/authenticate');
const adminOnly = require('./auth/adminOnly');
const authHandler = require('./auth/authHandler');

app.post('/login', authHandler.login);
app.post('/refresh', authHandler.refresh);
app.post('/logout', authHandler.logout);
//Database connection
if (!config.has('database')) {
  logger.error('No database config found.');
  process.exit();
}

app.use('/bills', authenticateJwt, adminOnly, require('./controllers/bill/bill.routes'));
app.use('/foods', require('./controllers/food/food.routes'));
app.use('/nutrients', require('./controllers/nutrient/nutrient.routes'));
app.use('/orders', authenticateJwt, adminOnly, require('./controllers/order/order.routes'));
app.use('/users', require('./controllers/user/user.routes'));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})