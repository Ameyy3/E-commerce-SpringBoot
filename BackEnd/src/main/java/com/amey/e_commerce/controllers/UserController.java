package com.amey.e_commerce.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.amey.e_commerce.Repos.UserRepository;
import com.amey.e_commerce.entities.UserDetails;

@RestController
public class UserController {
    // Define your endpoints here

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<UserDetails> getUsers() {
        // This is a placeholder. Replace with actual logic to fetch users.
        return userRepository.findAll();
    }
}
