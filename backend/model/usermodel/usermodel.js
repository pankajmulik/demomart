const mongoose = require('mongoose')
const schema = mongoose.Schema


const usetShema = new schema(
    {
        name: String,
        email: String,
        mobileno: Number,
        password: String,
       
        image: String,
    },{timestamps:true}
)

export default userSchema


