module.exports = {
    logoutFunction: (req, res) => {
        if (req.session.user && req.cookies.userCookie) {
            res.clearCookie("userCookie");
            if (!req.cookies.userCookie) {
                res.send(false)
            } else {
                res.send(true)
            }
        } else {
            console.log("No user logged")
        }
    }
}