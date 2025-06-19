package com.amey.e_commerce.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.Product;

public interface ProductRepository  extends JpaRepository<Product,Long >{

}
