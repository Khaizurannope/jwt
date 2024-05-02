const jwt = require('jsonwebtoken');
const secretKey = 'pengenLiburan';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1hIjoiS0hBSVpVUkFOT1BFIiwiYWxhbWF0IjoiQXRsYW50aXMgQ2l0eSIsIm5vbW9yS29udGFrIjoiMDgyOTE5Mzg0MjMiLCJpYXQiOjE3MTQ2Mzg3Mzh9.BxuLrBF_NnoYxxzekiDy-S8WyFOlH1jNuAgNe_hIjxM';

jwt.verify(token,secretKey,(err,decoded)=>{
    if(err) {
        console.error(err);
      } 
      else console.log("Token is valid"); 
      delete decoded.iat;
      console.log(decoded);
})