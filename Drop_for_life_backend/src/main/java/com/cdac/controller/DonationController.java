//package com.cdac.controller;
//
//import java.util.List;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.PutMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.cdac.custom_exceptions.ApiException;
//import com.cdac.dto.DonationReqDto;
//import com.cdac.dto.DonationResDto;
//
//import com.cdac.entities.Donation;
//
//import com.cdac.services.DonationService;
//
//import jakarta.validation.Valid;
//import lombok.AllArgsConstructor;
//
//@RestController
//@RequestMapping("/donations")
//@AllArgsConstructor
//public class DonationController {
//	
//           private final DonationService donationservice;
//           
//           @PostMapping
//       	public ResponseEntity<?> addNewDonation(@RequestBody @Valid DonationReqDto dto) {
//       		try {
//       			return ResponseEntity.status(HttpStatus.CREATED).body(donationservice.addNewDonation(dto));
//       		} catch (RuntimeException e) {
//       			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiException(e.getMessage()));
//       		}
//       	}
//           
//           @DeleteMapping("/{donationname}")
//       	public ResponseEntity<?> deleteDonation(@PathVariable String donationname) {
//       		try {
//       			return ResponseEntity.ok(donationservice.deleteDonation(donationname));
//       		} catch (RuntimeException e) {
//       			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//       		}
//       	}  
//           
//           @PutMapping("/{donationId}")
//       	public ResponseEntity<?> updateDonation(@PathVariable Long donationId, @RequestBody @Valid Donation donation) {
//       		try {
//       			return ResponseEntity.ok(donationservice.updateDonation(donationId, donation));
//       		} catch (RuntimeException e) {
//       			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//       		}
//       	}
//           
//           @GetMapping
//       	public ResponseEntity<List<DonationResDto>> getAllDonations(){
//       		List<DonationResDto> donation=donationservice.getAllDonation();
//       		return ResponseEntity.ok(donation);
//       	}
//       	           
//}
