export const productValidation = {
  productName: {
    required: "Name is required",
    minLength: { value: 3, message: "Min 3 characters" },
  },

  price: {
    required: "Product price is required",
    min: {
      value: 0.01,
      message: "Price must be greater than 0",
    },
  },

  category_Id: {
    required: "Please select a category",
  },
  created_at: {
    required: "Please pick a date",
  },
  product_image: {
    required: "Please select a product image",
  },

  stock: {
    required: "Stock is required",
    min: {
      value: 0,
      message: "Stock cannot be negative",
    },
  },

  description: {
    required: "Description is required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters",
    },
    maxLength: {
      value: 500,
      message: "Description cannot exceed 500 characters",
    },
  },
};
