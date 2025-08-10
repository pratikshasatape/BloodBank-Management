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
//import com.cdac.dto.TransactionReqDto;
//import com.cdac.dto.TransactionResDto;
//
//import com.cdac.entities.Transaction;
//import com.cdac.services.TransactionService;
//
//import jakarta.validation.Valid;
//import lombok.AllArgsConstructor;
//@RestController
//@RequestMapping("/transactions")
//@AllArgsConstructor
//public class TransactionController {
//
//	private final TransactionService transactionservice;
//	
//	@PostMapping
//   	public ResponseEntity<?> addNewTransaction(@RequestBody @Valid TransactionReqDto dto) {
//   		try {
//   			return ResponseEntity.status(HttpStatus.CREATED).body(transactionservice.addNewTransaction(dto));
//   		} catch (RuntimeException e) {
//   			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiException(e.getMessage()));
//   		}
//   	}
//	
//	@DeleteMapping("/{transactionname}")
//   	public ResponseEntity<?> deleteTransaction(@PathVariable String transactionname) {
//   		try {
//   			return ResponseEntity.ok(transactionservice.deleteTransaction(transactionname));
//   		} catch (RuntimeException e) {
//   			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//   		}
//   	}  
//	
//	
//	
//	@PutMapping("/{transactionId}")
//   	public ResponseEntity<?> updateTransaction(@PathVariable Long transactionId, @RequestBody @Valid Transaction transaction) {
//   		try {
//   			return ResponseEntity.ok(transactionservice.updateTransaction(transactionId, transaction));
//   		} catch (RuntimeException e) {
//   			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiException(e.getMessage()));
//   		}
//   	}
//       
//       @GetMapping
//   	public ResponseEntity<List<TransactionResDto>> getAllTransaction(){
//    	   
//   		List<TransactionResDto> transaction=transactionservice.getAllTransaction();
//   		return ResponseEntity.ok(transaction);
//   	}
//		
//}
