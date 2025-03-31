package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.entities.Product;
import org.devlearn.lvshopserver.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Override
    public Product addProduct(ProductDTO productDTO) {
        return null;
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        // TO-DO Mapping of Products into product DTO
        return products;
    }

    private Product createProduct(ProductDTO productDTO) {
        Product product = new Product();
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setNewArrival(productDTO.isNewArrival());
        product.setPrice(productDTO.getPrice());

        return product;
    }
}
