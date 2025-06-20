package com.amey.e_commerce.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.amey.e_commerce.entities.Product;
import com.amey.e_commerce.services.ProductDaoService;

@RestController
public class ProductController {
    
    private final ProductDaoService productService;

    public ProductController(ProductDaoService productService) {
        this.productService = productService;
    }

    @GetMapping("/products")
    public List<Product> getProducts() {
        return productService.getAllProducts();
    }

    //get product by its id
     @GetMapping("/products/{id}")
    public Product getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }
    //get product by category id
    @GetMapping("/category/{id}")
    public List<Product> getProductByCategoryId(@PathVariable Long id) {
        return productService.getProductByCategoryId(id);
    }

    // get product by category name
    @GetMapping("/category/name/{name}")
    public List<Product> getProductByCategoryId(@PathVariable String name) {
        return productService.getProductByCategoryName(name);
    }


    // Add product (category name from request param or body)
    @PostMapping("/products/add")
    public Product addProduct(@RequestBody Product product, @RequestParam String categoryName) {
        return productService.addProduct(product, categoryName);
    }

    // Update product (price, stock, etc.)
    @PutMapping("/products/update/{id}")
    public Product updateProduct(@PathVariable Long id,
                                 @RequestParam(required = false) Double price,
                                 @RequestParam(required = false) Integer stock,
                                 @RequestParam(required = false) String description) {
        return productService.updateProduct(id, price, stock, description);
    }
}
