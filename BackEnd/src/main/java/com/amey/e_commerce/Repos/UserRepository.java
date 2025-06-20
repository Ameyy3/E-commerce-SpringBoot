package com.amey.e_commerce.Repos;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.amey.e_commerce.entities.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails, Long> {

    Optional<UserDetails> findByEmail(String email);

}
