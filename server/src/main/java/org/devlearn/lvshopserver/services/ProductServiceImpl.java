package org.devlearn.lvshopserver.services;

import org.devlearn.lvshopserver.dto.ProductDto;
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
import org.apache.coyote.BadRequestException;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@Service
public class ProductServiceImpl implements ProductService{

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private ProductMapper productMapper;



    @Override
    public List<ProductDto> getAllProducts(UUID categoryId, UUID typeId) {

        Specification<Product> productSpecification= Specification.where(null);

        if(null != categoryId){
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryID(categoryId));
        }
        if(null != typeId){
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryTypeID(typeId));
        }

        List<Product> products = productRepository.findAll(productSpecification);
        return productMapper.getProductDtos(products);
    }

    @Override
    public ProductDto getProductBySlug(String slug) {
        Product product= productRepository.findBySlug(slug);
        if(null == product){
            throw new ResourceNotFoundEx("Product Not Found!");
        }
        ProductDto productDto = productMapper.mapProductToDto(product);
        productDto.setCategoryId(product.getCategory().getId());
        productDto.setCategoryTypeId(product.getCategoryType().getId());
        productDto.setVariants(productMapper.mapProductVariantListToDto(product.getProductVariants()));
        productDto.setProductResources(productMapper.mapProductResourcesListDto(product.getResources()));
        return productDto;
    }

    @Override
    public ProductDto getProductById(UUID id) {
        Product product= productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundEx("Product Not Found!"));
        ProductDto productDto = productMapper.mapProductToDto(product);
        productDto.setCategoryId(product.getCategory().getId());
        productDto.setCategoryTypeId(product.getCategoryType().getId());
        productDto.setVariants(productMapper.mapProductVariantListToDto(product.getProductVariants()));
        productDto.setProductResources(productMapper.mapProductResourcesListDto(product.getResources()));
        return productDto;
    }

    @Override
    public Product addProduct(ProductDto productDto) {
        Product product = productMapper.mapToProductEntity(productDto);
        return productRepository.save(product);
    }
    @Override
    public Product updateProduct(ProductDto productDto, UUID id) {
        Product product= productRepository.findById(id).orElseThrow(()-> new ResourceNotFoundEx("Product Not Found!"));
        productDto.setId(product.getId());
        return productRepository.save(productMapper.mapToProductEntity(productDto));
    }

    @Override
    public Product fetchProductById(UUID id) throws Exception {
        return productRepository.findById(id).orElseThrow(BadRequestException::new);
    }


}