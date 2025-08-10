package com.cdac.entities;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class BloodBank {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long BankId;
	private String Name;
	private String Location;
	private String Contact;
	
}
