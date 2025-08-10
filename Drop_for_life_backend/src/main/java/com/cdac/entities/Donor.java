package com.cdac.entities;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@Table(name="donors")

public class Donor  {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long donorid;
	@Column(name="donor_name")
	private String name;
	private String gender;
	private int age;
	private String bloodGroup;
	@NotBlank
	
	@Size(min = 10)
	@Column(name="contact_no")
	private String contact;
	private String email;
	private String address;
	private LocalDate last_Donation_date;
	private boolean available;
	
}

//	public Donor(@NotBlank String name, String gender, LocalDate dOB,String bloodGroup,
//			@NotBlank @Size(min = 10) String contact, String email, String address ,LocalDate last_Donation_date) {
//		super();
//		this.name = name;
//		this.gender = gender;
//		this.dOB = dOB;
//		this.bloodGroup = bloodGroup;
//		this.contact = contact;
//		this.email = email;
//		this.address = address;
//		this.last_Donation_date = last_Donation_date;
//	}
//	
	
	
	

