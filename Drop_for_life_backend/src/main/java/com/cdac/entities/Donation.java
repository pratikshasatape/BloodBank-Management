//package com.cdac.entities;
//
//import java.time.LocalDate;
//
//import jakarta.persistence.Entity;
//import jakarta.persistence.GeneratedValue;
//import jakarta.persistence.GenerationType;
//import jakarta.persistence.Id;
//import jakarta.persistence.ManyToOne;
//import lombok.Getter;
//import lombok.Setter;
//import lombok.ToString;
//
//@Entity
//@Getter
//@Setter
//@ToString
//public class Donation {
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	private Long donationId;
//	
//	@ManyToOne
//	private Donor donor;
//	
//	@ManyToOne
//	private BloodBank bloodbank;
//	private LocalDate date;
//	private int Quantity;
//	
//	
//}
