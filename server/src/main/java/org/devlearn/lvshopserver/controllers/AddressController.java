package org.devlearn.lvshopserver.controllers;

import org.devlearn.lvshopserver.dto.AddressRequest;
import org.devlearn.lvshopserver.entities.Address;
import org.devlearn.lvshopserver.services.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.UUID;

/**
 * @author tippy091
 * @created 08/04/2025
 * @project server
 **/


@RestController
@RequestMapping("/api/address")
@CrossOrigin(origins = "http://13.239.40.146:5173")
public class AddressController {

    @Autowired
    private AddressService addressService;

    @PostMapping
    public ResponseEntity<Address> createAddress(@RequestBody AddressRequest addressRequest, Principal principal){
        Address address = addressService.createAddress(addressRequest,principal);
        return new ResponseEntity<>(address, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteAddress(@PathVariable UUID id){
        addressService.deleteAddress(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
