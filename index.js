const wppconnect = require("@wppconnect-team/wppconnect");

wppconnect.create({ session: 'botwhatsapp' }).then((client) => {
   client.onMessage((message) => {
      console.log(message);
      console.log('✅')
   });
}).catch((err) => console.log('Erro WPPConnect', err));