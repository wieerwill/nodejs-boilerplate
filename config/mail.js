/*## Mail Config ##*/
module.exports = {
    'connection' :  {
        'host': 'smtp.XXXXX.de', // mailserver address
        'port': '587', //587 else 465
        'secure': false, // true for 465, false for other ports
        'auth': {
            'user': 'XXXX@XXXXX.com', // username
            'pass': 'XXXXXXXXXX' // password
        }
    }
};