const { app ,server } = require('./src/server.js');



server.listen(app.get('port'), () => console.log(`SERVER RUNNING IN PORT ${app.get('port')}`));
