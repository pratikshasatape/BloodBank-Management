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
//
//import com.cdac.dto.PatientReqDto;
//import com.cdac.dto.PatientResDto;
//
//import com.cdac.entities.Patient;
//
//import com.cdac.services.PatientService;
//
//import jakarta.validation.Valid;
//import lombok.AllArgsConstructor;
//
//@RestController
//@RequestMapping("/patients")
//@AllArgsConstructor 
//
//
//public class PatientController {
//private final PatientService patientservice;
//	
//	@PostMapping
//	public ResponseEntity<?> addNewPatient(@RequestBody @Valid PatientReqDto dto) {
//		try {
//			return ResponseEntity.status(HttpStatus.CREATED).body(patientservice.addNewPatient(dto));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiException(e.getMessage()));
//		}
//	}
//	
//	@DeleteMapping("/{patientname}")
//	public ResponseEntity<?> deletePatient(@PathVariable String patientname) {
//		try {
//			return ResponseEntity.ok(patientservice.deletePatient(patientname));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//		}
//	}
//	
//	
//	@PutMapping("/{patientId}")
//	public ResponseEntity<?> updatePatients(@PathVariable Long patientId, @RequestBody @Valid Patient patients) {
//		try {
//			return ResponseEntity.ok(patientservice.updatePatients(patientId, patients));
//		} catch (RuntimeException e) {
//			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//		}
//	}
//	
//	@GetMapping
//	public ResponseEntity<List<PatientResDto>> getAllPatients(){
//		List<PatientResDto> patients=patientservice.getAllPatients();
//		return ResponseEntity.ok(patients);
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
