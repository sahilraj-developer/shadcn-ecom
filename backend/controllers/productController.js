const ProductModel = require('../models/Product');

// CREATE - Add a new product
exports.productAdd = async (req, res) => {
  try {
    const newProduct = new ProductModel(req.body);
    await newProduct.save();
    res.status(201).json({ status: 'success', message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to add product' });
  }
};

// READ - Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ status: 'success', products });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch products' });
  }
};

// READ - Get product by ID
exports.getProductById = async (req, res) => {
    
  try {
    const product = await ProductModel.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ status: 'error', message: 'Product not found' });
    }
    res.status(200).json({ status: 'success', product });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch product' });
  }
};

// UPDATE - Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const updatedProduct = await ProductModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ status: 'error', message: 'Product not found' });
    }
    res.status(200).json({ status: 'success', message: 'Product updated', product: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to update product' });
  }
};

// DELETE - Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ status: 'error', message: 'Product not found' });
    }
    res.status(200).json({ status: 'success', message: 'Product deleted', product: deletedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: 'Failed to delete product' });
  }
};
