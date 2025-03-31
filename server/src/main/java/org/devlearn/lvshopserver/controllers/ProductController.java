package org.devlearn.lvshopserver.controllers;

import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.entities.Product;
import org.devlearn.lvshopserver.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project lv-shop-server
 **/


@RestController
@RequestMapping("/api/products")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {

        List<Product> productList = productService.getAllProducts();
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDTO productDTO) {
        Product product1 = productService.addProduct(productDTO);
        return null;
    }
}
