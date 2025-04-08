package org.devlearn.lvshopserver.specification;

import org.devlearn.lvshopserver.entities.Product;
import org.springframework.data.jpa.domain.Specification;

import java.util.UUID;

/**
 * @author tippy091
 * @created 02/04/2025
 * @project server
 **/
public class ProductSpecification {


    public static Specification<Product> hasCategoryID(UUID categoryID) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("category").get("id"), categoryID);
    }

    public static Specification<Product> hasCategoryTypeID(UUID typeID) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("categoryType").get("id"), typeID);
    }
}
