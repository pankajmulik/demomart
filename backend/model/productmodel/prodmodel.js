const mongoose = require('mongoose')
const schema = mongoose.Schema


const productSchema = new schema(
    {
        name: String,
        description: String,
        price: Number,
        category: String,
        stock: Number,
        image: String,
    },{timestamps:true}
)

export default productSchema


