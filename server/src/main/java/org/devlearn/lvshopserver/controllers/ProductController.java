package org.devlearn.lvshopserver.controllers;

import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.devlearn.lvshopserver.dto.ProductDto;
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
@CrossOrigin(origins = "http://13.239.40.146:5173")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService){
        this.productService = productService;
    }

    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts(@RequestParam(required = false,name = "categoryId",value = "categoryId") UUID categoryId, @RequestParam(required = false,name = "typeId",value = "typeId") UUID typeId, @RequestParam(required = false) String slug, HttpServletResponse response){
        List<ProductDto> productList = new ArrayList<>();
        if(StringUtils.isNotBlank(slug)){
            ProductDto productDto = productService.getProductBySlug(slug);
            productList.add(productDto);
        }
        else {
            productList = productService.getAllProducts(categoryId, typeId);
        }
        response.setHeader("Content-Range",String.valueOf(productList.size()));
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable UUID id){
        ProductDto productDtos = productService.getProductById(id);
        return new ResponseEntity<>(productDtos, HttpStatus.OK);
    }

    //   create Product
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto){
        Product product = productService.addProduct(productDto);
        return new ResponseEntity<>(product,HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Product> updateProduct(@RequestBody ProductDto productDto,@PathVariable UUID id){
        Product product = productService.updateProduct(productDto, id);
        return new ResponseEntity<>(product,HttpStatus.OK);
    }


}
