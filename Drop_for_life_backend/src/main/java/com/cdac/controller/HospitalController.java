//package com.cdac.controller;
//import java.util.List;
//
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
//import com.cdac.dto.HospitalReqDto;
//import com.cdac.dto.HospitalResDto;
//
//import com.cdac.entities.Hospital;
//
//import com.cdac.services.HospitalService;
//
//
//import jakarta.validation.Valid;
//import lombok.AllArgsConstructor;
//
//@RestController
//@RequestMapping("/hospitals")
//@AllArgsConstructor 
//
//
//public class HospitalController {
//private final HospitalService hospitalservice;
//	
//	@PostMapping
//	public ResponseEntity<?> addNewHospital(@RequestBody @Valid HospitalReqDto dto) {
//		try {
//			return ResponseEntity.status(HttpStatus.CREATED).body(hospitalservice.addNewHospital(dto));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiException(e.getMessage()));
//		}
//	}
//	
//	@DeleteMapping("/{hospitalname}")
//	public ResponseEntity<?> deleteHospital(@PathVariable String hospitalname) {
//		try {
//			return ResponseEntity.ok(hospitalservice.deleteHospital(hospitalname));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//		}
//	}
//	
//	
//	@PutMapping("/{hospitalId}")
//	public ResponseEntity<?> updateHospitals(@PathVariable Long hospitalId, @RequestBody @Valid Hospital hospitals) {
//		try {
//			return ResponseEntity.ok(hospitalservice.updateHospitals(hospitalId, hospitals));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//		}
//	}
//	
//	@GetMapping
//	public ResponseEntity<List<HospitalResDto>> getAllHospitals(){
//		List<HospitalResDto> hospitals=hospitalservice.getAllHospitals();
//		return ResponseEntity.ok(hospitals);
//	}
//	
//	
//}
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//	
//
//
//	
//
