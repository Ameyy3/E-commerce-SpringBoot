package com.amey.e_commerce.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.amey.e_commerce.entities.UserDetails;
import com.amey.e_commerce.services.UserDaoService;





@RestController
public class UserController {
    // Define your endpoints here

    private final UserDaoService userservice;

    public UserController(UserDaoService userservice) {
        this.userservice = userservice;
    }

    @GetMapping("/users")
    public List<UserDetails> getUsers() {
        // This is a placeholder. Replace with actual logic to fetch users.
        return userservice.showAllusers();
    }


    // add a new user
    @PostMapping("/users")
    public ResponseEntity<UserDetails> addUser(@RequestBody UserDetails user) {
        UserDetails savedUser = userservice.registerNewUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }
    

    // get a specific user
    @GetMapping("/users/{id}")
    public UserDetails getUserWithId(@PathVariable Long id) {
        return userservice.getUserById(id);
    }

    @PatchMapping("/users/{id}")
    public ResponseEntity<UserDetails> updateuser(@PathVariable Long id, @RequestBody UserDetails newUser) {
        UserDetails user = userservice.updateUser(id, newUser);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(user);
    }

    //delete
    @DeleteMapping("/users/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
        userservice.deleteUser(id);
        return ResponseEntity.ok("User deleted successfully");
    }


    //find by email
    @GetMapping("/users/email/{email}")
    public UserDetails getUserWithId(@PathVariable String email) {
        return userservice.getUserByEmail(email);
    }
    
    
}
