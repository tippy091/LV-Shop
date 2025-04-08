package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.entities.Product;

import java.util.List;
import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/
public interface ProductService {


    Product addProduct(ProductDTO productDTO);

    List<ProductDTO> getAllProducts(UUID categoryID, UUID typeID);

    ProductDTO getProductBySlug(String slug);

    ProductDTO getProductById(UUID id);

    Product updateProduct(ProductDTO productDTO);
}
