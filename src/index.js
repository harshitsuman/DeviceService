const app = require('../src/server/server');

app.listen(process.env.PORT ? process.env.PORT : 3000, ()=> console.log(`Server is running \
on the port: `,process.env.PORT ? process.env.PORT : 3000));
