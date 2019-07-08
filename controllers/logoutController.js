module.exports = {
    logoutFunction: (req, res) => {
        if (req.cookies.userCookie) {
            res.clearCookie("userCookie");
            res.send(true)
        } else {
            console.log("No user logged")
        }
    }
}