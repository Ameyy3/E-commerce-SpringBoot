package com.amey.e_commerce.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {

    // Custom query methods can be defined here if needed
    // For example, to find orders by user ID or status

    
}
