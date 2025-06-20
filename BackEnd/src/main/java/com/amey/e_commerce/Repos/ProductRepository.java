package com.amey.e_commerce.Repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.Product;

public interface ProductRepository  extends JpaRepository<Product,Long >{

    List<Product> findByCategoryId(Long category_id);
    
    List<Product> findByCategoryName(String category_name);
}
