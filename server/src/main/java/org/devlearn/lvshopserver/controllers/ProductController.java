package org.devlearn.lvshopserver.controllers;

import org.apache.commons.lang3.StringUtils;
import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.entities.Product;
import org.devlearn.lvshopserver.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project lv-shop-server
 **/

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<ProductDTO>> getAllProducts(@RequestParam(required = false) UUID categoryID,
            @RequestParam(required = false) UUID typeID, @RequestParam(required = false) String slug) {

        List<ProductDTO> productList = new ArrayList<>();
        if(StringUtils.isNotBlank(slug)) {
            ProductDTO productDTO = productService.getProductBySlug(slug);
            productList.add(productDTO);

        } else {
            productList = productService.getAllProducts(categoryID, typeID);
        }
        productList = productService.getAllProducts(categoryID, typeID);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDTO> getProductById(@PathVariable UUID id) {
        ProductDTO productDTO = productService.getProductById(id);
        return new ResponseEntity<>(productDTO, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDTO productDTO) {
        Product product = productService.addProduct(productDTO);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody ProductDTO productDTO){
        Product product = productService.updateProduct(productDTO);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }

}
