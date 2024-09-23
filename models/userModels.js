
/*exports.getUser = (email) =>{
    return null
}*/

const fs = require('fs')
const path = require('path')

exports.getUser = (useremail)=>
{
    const bufferData = fs.readFileSync(path.join(__dirname,'..','data','user.json'))
    const jsonData = JSON.parse(bufferData)

    const filterduser = jsonData.filter((user)=>{
         return user.email == useremail
    })

    if(filterduser.length >0){
        return filterduser[0]
    }else{
        return null
    }

}