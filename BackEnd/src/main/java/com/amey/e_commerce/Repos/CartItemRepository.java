package com.amey.e_commerce.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.CartItem;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

    // Custom query methods can be defined here if needed
    // For example, to find cart items by user ID or product ID
    
}
