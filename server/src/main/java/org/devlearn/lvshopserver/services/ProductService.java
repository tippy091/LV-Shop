package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.entities.Product;

import java.util.List;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/
public interface ProductService {


    Product addProduct(ProductDTO productDTO);
    List<Product> getAllProducts();
}
