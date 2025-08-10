package com.cdac.dto;

import java.time.LocalDate;


import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class DonorResDto {
	 private Long donorid;
	private String name;
	private String gender;
	private int age;
	private String bloodGroup;
	
	private String contact;
	private String email;
	private String address;
	private LocalDate last_Donation_date;
	private boolean available;
}
