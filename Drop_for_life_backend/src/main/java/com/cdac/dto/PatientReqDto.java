//package com.cdac.dto;
//
//import jakarta.persistence.Column;
//import jakarta.validation.constraints.Email;
//import jakarta.validation.constraints.NotBlank;
//import jakarta.validation.constraints.Size;
//import lombok.Getter;
//import lombok.Setter;
//@Getter
//@Setter
//public class PatientReqDto {
//
//	@NotBlank(message = "Name is required")
//	 private String name;
//	//@NotNull
//    private int age;
//    @NotBlank(message = "gender is required")
//    
//    private String Gender;
//    @NotBlank(message = "bloodgrp is required")
//    
//    private String bloodGroup;
//    
//    @NotBlank(message = "contact is required")
//    @Size(min = 10)
//	@Column(name="contact_no")
//    private String contact;
//    
//    @NotBlank(message = "email is required")
//	@Email
//    private String Email;
//    
//    @NotBlank(message = "address is required")
//    private String Address;
//}
