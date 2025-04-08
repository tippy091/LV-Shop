package org.devlearn.lvshopserver.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.devlearn.lvshopserver.entities.Product;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class OrderItemDetail {

    private UUID id;
    private Product product;
    private UUID productVariantId;
    private Integer quantity;
    private Double itemPrice;
}
