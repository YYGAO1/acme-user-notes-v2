const port = process.env.PORT || 3000;
const app = require('./app');
const { conn, Product, User, Note } = require('./db');

app.listen(port, async()=> {
  try {
    console.log(`listening on port ${port}`)
    //seed data
    await conn.sync({ force: true });
    const [moe, lucy]  = await Promise.all([
      User.create({ username: 'moe', password: 'm', luckyNumber: 8}), 
      User.create({ username: 'lucy', password: 'l' }), 
      Product.create({ name: 'foo' }),
      Product.create({ name: 'foop', inStock: false }),
      Product.create({ name: 'bar', inStock: false }),
      Product.create({ name: 'bazz'}),
      Product.create({ name: 'quq'}),
      Product.create({ name: 'quq!!', inStock: false}),
    ]);
    await Promise.all(['hello', 'world'].map( txt => Note.create({ txt, userId: moe.id})));
    console.log('seeded');
  }
  catch(ex){
    console.log(ex);
  }
});
