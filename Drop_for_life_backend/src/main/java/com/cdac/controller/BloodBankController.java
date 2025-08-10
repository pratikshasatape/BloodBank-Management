//package com.cdac.controller;
//
//	import java.util.List;
//
//	import org.springframework.http.HttpStatus;
//	import org.springframework.http.ResponseEntity;
//	import org.springframework.web.bind.annotation.DeleteMapping;
//	import org.springframework.web.bind.annotation.GetMapping;
//	import org.springframework.web.bind.annotation.PathVariable;
//	import org.springframework.web.bind.annotation.PostMapping;
//	import org.springframework.web.bind.annotation.PutMapping;
//	import org.springframework.web.bind.annotation.RequestBody;
//	import org.springframework.web.bind.annotation.RequestMapping;
//	import org.springframework.web.bind.annotation.RestController;
//
//	import com.cdac.custom_exceptions.ApiException;
//import com.cdac.dto.BloodBankReqDto;
//import com.cdac.dto.BloodBankResDto;
//import com.cdac.dto.PatientReqDto;
//	import com.cdac.dto.PatientResDto;
//import com.cdac.entities.BloodBank;
//import com.cdac.entities.Patient;
//import com.cdac.services.BloodBankService;
//import com.cdac.services.PatientService;
//
//	import jakarta.validation.Valid;
//	import lombok.AllArgsConstructor;
//
//	@RestController
//	@RequestMapping("/bloodbanks")
//	@AllArgsConstructor 
//
//
//	public class BloodBankController {
//	private final BloodBankService bloodbankservice;
//		
//		@PostMapping
//		public ResponseEntity<?> addNewBloodBank(@RequestBody @Valid BloodBankReqDto dto) {
//			try {
//				return ResponseEntity.status(HttpStatus.CREATED).body(bloodbankservice.addNewBloodBank(dto));
//			} catch (RuntimeException e) {
//				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiException(e.getMessage()));
//			}
//		}
//		
//		@DeleteMapping("/{bloodbankname}")
//		public ResponseEntity<?> deleteBloodBank(@PathVariable String bloodbankname) {
//			try {
//				return ResponseEntity.ok(bloodbankservice.deleteBloodBank(bloodbankname));
//			} catch (RuntimeException e) {
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//			}
//		}
//		
//		
//		@PutMapping("/{bloodbankId}")
//		public ResponseEntity<?> updateBloodBank(@PathVariable Long bloodbankId, @RequestBody @Valid BloodBank bloodbank) {
//			try {
//				return ResponseEntity.ok(bloodbankservice.updateBloodBank(bloodbankId, bloodbank));
//			} catch (RuntimeException e) {
//				return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//			}
//		}
//		
//		@GetMapping
//		public ResponseEntity<List<BloodBankResDto>> getAllBloodBank(){
//			List<BloodBankResDto> bloodbank=bloodbankservice.getAllBloodBank();
//			return ResponseEntity.ok(bloodbank);
//		}
//		
//		
//	}
//		
//		
//		
//		
//		
//		
//
//
//
