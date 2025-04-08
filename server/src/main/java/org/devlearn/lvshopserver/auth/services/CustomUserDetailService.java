package org.devlearn.lvshopserver.auth.services;

import org.devlearn.lvshopserver.auth.entities.User;
import org.devlearn.lvshopserver.auth.repository.UserDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author tippy091
 * @created 07/04/2025
 * @project server
 **/

@Service
public class CustomUserDetailService implements UserDetailsService {


    @Autowired
    private UserDetailRepository userDetailRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userDetailRepository.findByEmail(username);

        if(null == user) {
            throw new UsernameNotFoundException("User not found with Username " + username);
        }
        return user;
    }
}
