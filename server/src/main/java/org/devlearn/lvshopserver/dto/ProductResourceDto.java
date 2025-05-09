package org.devlearn.lvshopserver.dto;

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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductResourceDto {

    private UUID id;
    private String name;
    private String url;
    private String type;
    private  Boolean isPrimary;
}
