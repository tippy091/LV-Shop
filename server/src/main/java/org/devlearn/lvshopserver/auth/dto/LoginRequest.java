package org.devlearn.lvshopserver.auth.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @author tippy091
 * @created 07/04/2025
 * @project server
 **/

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {

    private String userName;
    private CharSequence password;


}
