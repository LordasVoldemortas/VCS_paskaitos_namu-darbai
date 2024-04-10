const auth = (req, res, next) => {

    console.log(req.session.user)
    if(req.session.user)
        return next();

    res.sendStatus(401);
}

export default auth;