import slugify from "slugify";
import Product from "../model/product";
import Category from "../model/category";

export const listProduct = async (req, res) => {
    const { category } = req.query;
    
    if (category) {
    const Idcategory = await Category.findOne({slug:category})
  
    const products = await Product.find({ category: Idcategory._id }).populate("category");
    
  
     res.json(products)
    } else {
    const product = await Product.find({}).limit(+req.query.limit).populate("category").exec();
    res.json(product);
    }

}
export const readProduct = async (req, res) => {
    console.log("req.params.slug", req.params.slug);
    const {slug} = req.params 
    const product = await Product.findOne({slug}).populate("category").exec();
    res.json(product)
}
export const createProduct = async (req, res) => {
    req.body.slug = slugify(req.body.name);


    try {

        const product = await new Product(req.body).save();
        res.json(product);

    } catch (error) {
        res.status(400).json({
            message: "Tao danh muc khong thanh cong"
        })
    }
}
export const updateProduct = async (req, res) => {
    
    const { name,price, quantity,description,category,image } = req.body;
    const product = await Product.findOneAndUpdate(
        { slug: req.params.slug },
        { name, price, quantity,description,category, image, slug: slugify(name) },
        { returnNewDocument: true },
        
    );
    res.json(product)
}
export const removeProduct = async (req, res) => {
    try {
        const product = await Product.findOneAndDelete({ slug: req.params.slug })
        res.json(product)
    } catch (error) {
        console.log("errrr");

    }

}

export const search = async (req, res) => {
    const { query } = req.body;
    if (query) {
        const product = await Product.find({ $text: { $search: query } })
            .populate('category', '_id name')
            .exec()
        res.json(product)
    }
}
