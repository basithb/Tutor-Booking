module.exports = function (req, res, next) {

    //1. Destructures email, name, and password

    const { email, name, password } = req.body;
  
    //2. Checking  if the email is valid
    function validEmail(userEmail) {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail); // check if the email is following the regex (regular expression) pattern
    }
  
    if (req.path === "/register") {
      // console.log(!email.length);
      if (![email, name, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    } 
    
    
    else if (req.path === "/login") {
      if (![email, password].every(Boolean)) {
        return res.status(401).json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.status(401).json("Invalid Email");
      }
    }
  
    next();
  };