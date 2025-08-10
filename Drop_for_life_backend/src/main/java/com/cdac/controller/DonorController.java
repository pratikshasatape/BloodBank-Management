package com.cdac.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.custom_exceptions.ApiException;
import com.cdac.dto.DonorReqDto;
import com.cdac.dto.DonorResDto;
import com.cdac.entities.Donor;
import com.cdac.services.DonorService;

import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/donors")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")

//@CrossOrigin(
//	    origins = "http://localhost:3000",
//	    allowedMethods = { "GET", "POST", "PUT", "DELETE", "OPTIONS" }
//	)
public class DonorController {

	private final DonorService donorservice;
	
	@PostMapping
	public ResponseEntity<?> addNewDonor(@RequestBody @Valid DonorReqDto dto) {
		try {
			return ResponseEntity.status(HttpStatus.CREATED).body(donorservice.addNewDonor(dto));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiException(e.getMessage()));
		}
	}
	
	@DeleteMapping("/{donorid}")
	public ResponseEntity<?> deleteDonor(@PathVariable Long donorid) {
		try {
			return ResponseEntity.ok(donorservice.deleteDonor(donorid));
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
		}
	}
	
//	@PutMapping("/{donorId}")
//	public ResponseEntity<?> updateDonors(@PathVariable Long donorId, @RequestBody @Valid Donor donors) {
//		try {
//			return ResponseEntity.ok(donorservice.updateDonors(donorId, donors));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//		}
//	}
	//@CrossOrigin(origins = "http://localhost:3000")
	@PutMapping("/{donorId}")
	public ResponseEntity<?> updateDonor(@PathVariable Long donorId, @RequestBody @Valid Donor donor) {
	    try {
	        Donor updatedDonor = donorservice.updateDonors(donorId, donor);
	        return ResponseEntity.ok(updatedDonor);
	    } catch (RuntimeException e) {
	    	System.out.println(e);
	        return ResponseEntity.status(HttpStatus.NOT_FOUND)
	                             .body(new ApiException("Donor not found with ID: " + donorId));
	    }
	}

	
	
	
	
	
	
	@GetMapping
	public ResponseEntity<List<DonorResDto>> getAllDonors(){
		List<DonorResDto> donors=donorservice.getAllDonors();
		return ResponseEntity.ok(donors);
	}
	
	
}
