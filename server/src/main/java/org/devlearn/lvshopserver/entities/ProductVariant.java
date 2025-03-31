package org.devlearn.lvshopserver.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project lv-shop-server
 **/


@Entity
@Table(name = "product_variant")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductVariant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false)
    private String size;

    @Column(nullable = false)
    private Integer stockQuantity;


    // Tạo mối liên hệ giữa Product và ProductVariant
    // FK Product_ProductVariant_ProductID
    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;
}
