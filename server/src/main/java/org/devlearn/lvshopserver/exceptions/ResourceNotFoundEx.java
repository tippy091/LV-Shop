package org.devlearn.lvshopserver.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * @author tippy091
 * @created 31/03/2025
 * @project server
 **/

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundEx extends RuntimeException {
    public ResourceNotFoundEx(String s) {
        super(s);
    }


    public ResourceNotFoundEx(String s, Throwable cause) {
        super(s, cause);
    }
}
