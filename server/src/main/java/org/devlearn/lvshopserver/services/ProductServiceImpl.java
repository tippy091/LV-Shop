package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.entities.*;
import org.devlearn.lvshopserver.exceptions.ResourceNotFoundEx;
import org.devlearn.lvshopserver.mapper.ProductMapper;
import org.devlearn.lvshopserver.repository.ProductRepository;
import org.devlearn.lvshopserver.specification.ProductSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProductMapper productMapper;

    @Override
    public Product addProduct(ProductDTO productDTO) {
        Product product = productMapper.mapToProductEntity(productDTO);
        return productRepository.save(product);
    }

    @Override
    public List<ProductDTO> getAllProducts(UUID categoryID, UUID typeID) {

        Specification<Product> productSpecification = Specification.where(null);

        if(null != categoryID) {
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryID(categoryID));
        }

        if(null != typeID) {
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryTypeID(typeID));
        }
        List<Product> products = productRepository.findAll(productSpecification);

        List<ProductDTO> productDTOs = productMapper.getProductDTO(products);
        return productDTOs;
    }

    @Override
    public ProductDTO getProductBySlug(String slug) {
        Product product = productRepository.findBySlug(slug);
        if(null == product) {
            throw new ResourceNotFoundEx("Product Not Found");
        }
        ProductDTO productDTO = productMapper.mapProductToDTO(product);
        productDTO.setCategoryId(product.getCategory().getId());
        productDTO.setCategoryTypeId(product.getCategoryType().getId());
        productDTO.setProductVariantDTO(productMapper.mapProductVariantListToDTO(product.getProductVariants()));
        productDTO.setProductResourcesDTO(productMapper.mapProductResourcesListDTO(product.getResources()));
        return productDTO;
    }

    @Override
    public ProductDTO getProductById(UUID id) {
        Product product = productRepository.findById(id).orElseThrow(() -> new ResourceNotFoundEx("Product Not Found"));

        ProductDTO productDTO = productMapper.mapProductToDTO(product);
        productDTO.setCategoryId(product.getCategory().getId());
        productDTO.setCategoryTypeId(product.getCategoryType().getId());
        productDTO.setProductVariantDTO(productMapper.mapProductVariantListToDTO(product.getProductVariants()));
        productDTO.setProductResourcesDTO(productMapper.mapProductResourcesListDTO(product.getResources()));
        return productDTO;
    }

    @Override
    public Product updateProduct(ProductDTO productDto) {
        Product product = productRepository.findById(productDto.getId()).orElseThrow(() -> new ResourceNotFoundEx("Product Not Found"));
        return productRepository.save(productMapper.mapToProductEntity(productDto));
    }

}
