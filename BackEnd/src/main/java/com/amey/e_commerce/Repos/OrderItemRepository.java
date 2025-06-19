package com.amey.e_commerce.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.OrderItem;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    // Custom query methods can be defined here if needed
    // For example, to find order items by order ID or product ID
    
}
