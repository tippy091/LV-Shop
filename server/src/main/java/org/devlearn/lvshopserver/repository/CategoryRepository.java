package org.devlearn.lvshopserver.repository;

import org.devlearn.lvshopserver.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> {
}
