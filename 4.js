const jwt = require('jsonwebtoken');
const secretKey = 'pengenLiburan';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJKYWR3YWwiOnsic2hhbGF0IjoiMDY6MDAiLCJtYWthbl9iZXJzYW1hIjoiMTI6MzAiLCJiZXJtYWluX2JlcnNhbWEiOiIxNjowMCJ9LCJpYXQiOjE3MTQ2Mzg4NDN9.SAWS1cnfO4uOtjo0NOO3fvii_ChX1jqQuyFEHNGqnVE';

jwt.verify(token,secretKey,(err,decoded)=>{
    if(err) {
        console.error(err);
      } 
      else console.log("Token is valid"); 
      delete decoded.iat;
      console.log(decoded);
})