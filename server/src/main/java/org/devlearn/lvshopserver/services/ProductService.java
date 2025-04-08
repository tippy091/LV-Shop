package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.ProductDto;
import org.devlearn.lvshopserver.entities.Product;

import java.util.List;
import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/
public interface ProductService {

    Product addProduct(ProductDto product);
    List<ProductDto> getAllProducts(UUID categoryId, UUID typeId);

    ProductDto getProductBySlug(String slug);

    ProductDto getProductById(UUID id);

    Product updateProduct(ProductDto productDto, UUID id);

    Product fetchProductById(UUID uuid) throws Exception;
}
