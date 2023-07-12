const mongoose = require("moongoose")

const Schema = mongoose.Schema;

const CATEGORIES = [
    "pizzas",
    "hamburguesas",
    "sandwiches",
    "hot dogs",
    "empanadas",
    "acompañantes",
    "bebidas",
    "bebidas alcoholicas",
    "ensaladas",
    "pollo frito",
    "asado",
    "picadas",
    "burritos",
    "tacos",
    "sushi",
    "postres",
    "lomitos",
    "combo",
    "elaborados",
    "otros",
];

const categoriSchema = new Schema ({
    name:{type:String, require:true,trim:true,lowercase:true},
    quantity:{type:Number,default:true},
    active:{type:Boolean,default:true},

},
{
    timestamps:true,
    versionkey:false,
}
);

ategoriSchema.statics.IncrementCategoryProdcuts = function (categoryName) {
    this.findOneAndUpdate(
        {name:categoryName},
        {$inc:{quantity:1}},
        {new:true}

    );
};


categoriSchema.statics.decrementCategoryProducts = function (categoryName) {
    this.findOneAndUpdate(
        {name:categoryName},
        {$inc:{quantity:-1}},
        {new:true}

    );
};

const Category = mongoose.model("Category",categoriSchema);
module.exports = {Category,CATEGORIES};
