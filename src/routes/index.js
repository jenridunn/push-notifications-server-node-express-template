const { Router } = require('express')
const router = Router()

//Subscribe user to web push notifications
const webpush = require('../webpush')
let pushSubscription;

router.post('/subscription', async (req, res) => {
    pushSubscription = req.body
    console.log(req.body)
    res.status(200).json()
    const payload = JSON.stringify({
        title: 'My Custom Notification',
        message: "Hello man! How you doing? Bla bla bla..."
    })

    try {
        await webpush.sendNotification(pushSubscription, payload)
    } catch (err) {
        console.log(err)
    }
})

module.exports = router