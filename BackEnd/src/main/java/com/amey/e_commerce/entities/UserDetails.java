package com.amey.e_commerce.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.validation.constraints.Size;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class UserDetails {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // auto-incrementing ID primary key
	private Long user_id;


	private String name;	

	
	private String phone;
	// @JsonIgnore
	private String address;
	
	@Column(unique = true) // ensures email is unique
	private String email;

	@Size(min=8 , message="Password must be at least 8 characters long")
 	@Column(nullable = false) // ensures password cannot be null
	@JsonIgnore
	private String password;


	@JsonIgnore
	private String role;  // admin or user

	@JsonIgnore
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orders;

	@JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<CartItem> cartItems;
}
