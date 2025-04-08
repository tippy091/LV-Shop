package org.devlearn.lvshopserver.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@Entity
@Table(name="product_resources")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Resources {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String url;

    @Column(nullable = false)
    private Boolean isPrimary;

    @Column(nullable = false)
    private String type;

    @ManyToOne
    @JoinColumn(name="product_id", nullable = false)
    @JsonIgnore
    private Product product;
}
