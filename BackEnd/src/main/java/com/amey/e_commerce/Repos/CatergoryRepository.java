package com.amey.e_commerce.Repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.Category;

public  interface CatergoryRepository extends JpaRepository<Category, Long> {

    // This interface will automatically provide CRUD operations for Category entities
    // You can add custom query methods here if needed>
    
}
