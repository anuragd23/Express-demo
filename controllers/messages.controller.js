const path = require('path');

function getMessages(req, res) {
  //  res.send('<ul><li>Hello Friend!</li></ul>');
  res.sendFile( path.join(__dirname, '..', 'public', 'skimountain.jpg'));

}

function postMessage(req, res) {
    console.log('Updating Messages..');
}

module.exports = {
    getMessages,
    postMessage,
}