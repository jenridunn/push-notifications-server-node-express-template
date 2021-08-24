/*For generating the public and private keys execute on the console
npx web-push generate-vapid-keys and copy the values to the variables in the .env file*/

const webpush = require('web-push')

webpush.setVapidDetails(
    'mailto:jenrique271190@gmail.com',
    process.env.PUBLIC_VAPID_KEY,
    process.env.PRIVATE_VAPID_KEY
)

module.exports = webpush
