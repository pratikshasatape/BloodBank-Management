package com.cdac.dto;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DonorReqDto {
	@NotBlank(message = "Name is required")
	private String name;
	
	@NotBlank(message = "gender is required")
	private String gender;
	
	//@NotNull
	private int age;
	
	@NotBlank(message = "bloodgrp is required")
	private String bloodGroup;
	
	@NotBlank(message = "contact is required")
	@Size(min = 10)
	@Column(name="contact_no")
	private String contact;
	
	@NotBlank(message = "email is required")
	@Email
	private String email;
	
	@NotBlank(message = "address is required")
	private String address;
	
	//@NotNull
	private LocalDate last_Donation_date;
	private boolean available;
	
	

	
}
