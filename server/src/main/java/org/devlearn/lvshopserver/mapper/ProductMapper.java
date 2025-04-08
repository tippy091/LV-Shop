package org.devlearn.lvshopserver.mapper;

import org.devlearn.lvshopserver.dto.ProductDTO;
import org.devlearn.lvshopserver.dto.ProductResourcesDTO;
import org.devlearn.lvshopserver.dto.ProductVariantDTO;
import org.devlearn.lvshopserver.entities.*;
import org.devlearn.lvshopserver.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Objects;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * @author tippy091
 * @created 05/04/2025
 * @project server
 **/

@Component
public class ProductMapper {

    @Autowired
    private CategoryService categoryService;


    public Product mapToProductEntity(ProductDTO productDTO) {
        Product product = new Product();
        if(null != productDTO.getId()) {
            product.setId(productDTO.getId());
        }
        product.setName(productDTO.getName());
        product.setDescription(productDTO.getDescription());
        product.setNewArrival(productDTO.isNewArrival());
        product.setPrice(productDTO.getPrice());
        product.setSlug(productDTO.getSlug());

        Category category = categoryService.getCategory(productDTO.getCategoryId());
        if(null != category) {
            product.setCategory(category);
            UUID categoryTypeID = productDTO.getCategoryTypeId();
            CategoryType categoryType = category.getCategoryTypes().stream().filter(categoryType1 -> categoryType1.getId().equals(categoryTypeID)).findFirst().orElse(null);

            product.setCategoryType(categoryType);
        }

        if(null != productDTO.getProductVariantDTO()) {
            product.setProductVariants(mapToProductVariant(productDTO.getProductVariantDTO(), product));
        }

        if(null != productDTO.getProductResourcesDTO()) {
            product.setResources(mapToProductResources(productDTO.getProductResourcesDTO(), product));
        }
        return product;
    }

    private List<Resources> mapToProductResources(List<ProductResourcesDTO> productResourcesDTO, Product product) {

        return productResourcesDTO.stream().map(productResourceDto -> {
            Resources resources = new Resources();
            if(null != productResourceDto.getId()) {
                resources.setId(productResourceDto.getId());
            }
            resources.setName(productResourceDto.getName());
            resources.setType(productResourceDto.getType());
            resources.setUrl(productResourceDto.getUrl());
            resources.setIsPrimary(productResourceDto.getIsPrimary());
            resources.setProduct(product);
            return resources;
        }).collect(Collectors.toList());
    }

    private List<ProductVariant> mapToProductVariant(List<ProductVariantDTO> productVariantDTOs, Product product) {
        return productVariantDTOs.stream().map(productVariantDTO -> {
            ProductVariant productVariant = new ProductVariant();
            if(null != productVariantDTO.getId()){
                productVariant.setId(productVariantDTO.getId());
            }
            productVariant.setSize(productVariantDTO.getSize());
            productVariant.setStockQuantity(productVariantDTO.getStockQuantity());
            productVariant.setProduct(product);
            return productVariant;
        }).collect(Collectors.toList());
    }

    public List<ProductDTO> getProductDTO(List<Product> products) {
        return products.stream().map(this::mapProductToDTO).toList();

    }

    public ProductDTO mapProductToDTO(Product product) {
        return ProductDTO.builder()
                .id(product.getId())
                .name(product.getName())
                .price(product.getPrice())
                .isNewArrival(product.isNewArrival())
                .description(product.getDescription())
                .slug(product.getSlug())
                .thumbnail(getProductThumbNail(product.getResources())).build();
    }

    private String getProductThumbNail(List<Resources> resources) {
       return Objects.requireNonNull(resources.stream().filter(Resources::getIsPrimary).findFirst().orElse(null)).getUrl();
    }

    public List<ProductVariantDTO> mapProductVariantListToDTO(List<ProductVariant> productVariants) {

        return productVariants.stream().map(this::mapProductVariantDTO).toList();
    }

    private ProductVariantDTO mapProductVariantDTO(ProductVariant productVariant) {
        return ProductVariantDTO.builder()
                .id(productVariant.getId())
                .size(productVariant.getSize())
                .stockQuantity(productVariant.getStockQuantity())
                .build();
    }

    public List<ProductResourcesDTO> mapProductResourcesListDTO(List<Resources> resources) {

        return resources.stream().map(this::mapResourceToDTO).toList();
    }

    private ProductResourcesDTO mapResourceToDTO(Resources resources) {
        return ProductResourcesDTO.builder()
                .id(resources.getId())
                .url(resources.getUrl())
                .name(resources.getName())
                .isPrimary(resources.getIsPrimary())
                .type(resources.getType())
                .build();
    }
}
