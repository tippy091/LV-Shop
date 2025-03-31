package org.devlearn.lvshopserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {

    private UUID id;
    private String name;
    private String description;
    private BigDecimal price;
    private boolean isNewArrival;
    private String categoryName;
    private UUID categoryId;
    private UUID categoryTypeId;
    private String categoryTypeName;

    private List<ProductVariantDTO> productVariantDTO;
    private List<ProductResourcesDTO> productResourcesDTO;
}
