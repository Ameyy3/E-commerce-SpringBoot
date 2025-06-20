package com.amey.e_commerce.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
	@Id
	@GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY) // auto-incrementing ID primary key
	private Long prod_id;

	private String prod_name;
 	private String prod_description;

	private Double price;
    private Integer stock;
	@ManyToOne
	@JoinColumn(name = "category_id")
	@JsonIgnore
	private Category category;
}
