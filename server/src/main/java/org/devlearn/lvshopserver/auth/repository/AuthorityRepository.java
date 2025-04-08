package org.devlearn.lvshopserver.auth.repository;

import org.devlearn.lvshopserver.auth.entities.Authority;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

/**
 * @author tippy091
 * @created 07/04/2025
 * @project server
 **/

@Repository
public interface AuthorityRepository extends JpaRepository<Authority, UUID> {
    Authority findByRoleCode(String user);
}
