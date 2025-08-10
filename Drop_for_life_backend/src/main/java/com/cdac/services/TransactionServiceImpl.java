//package com.cdac.services;
//
//import java.util.List;
//import java.util.stream.Collectors;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.stereotype.Service;
//
//import com.cdac.custom_exceptions.ApiException;
//import com.cdac.custom_exceptions.ResourceNotFoundException;
//
//import com.cdac.dao.TransactionDao;
//import com.cdac.dto.ApiResponse;
//
//import com.cdac.dto.TransactionReqDto;
//import com.cdac.dto.TransactionResDto;
//
//import com.cdac.entities.Transaction;
//
//import jakarta.transaction.Transactional;
//import lombok.AllArgsConstructor;
//
//@Service
//@Transactional
//@AllArgsConstructor
//public class TransactionServiceImpl implements TransactionService{
//	
//	private final TransactionDao transactionDao;
//	private final ModelMapper modelMapper;
//	
//	@Override
//	public TransactionResDto addNewTransaction(TransactionReqDto dto) {
//		if(transactionDao.findByid(dto.getId()).isEmpty()) {
//		
//			Transaction transaction = modelMapper.map(dto, Transaction.class);
//			return modelMapper.map(transactionDao.save(transaction),TransactionResDto.class);
//			}
//		throw new ApiException("dup name");
//		}
//
//	@Override
//	public ApiResponse deleteTransaction(String transactionname) {
//		
//		Transaction transaction = transactionDao.findByName(transactionname) 
//        		.orElseThrow(()->new ResourceNotFoundException("name not found"));
//		transactionDao.delete(transaction);
//		return new ApiResponse("deleted succefully");
//	}
//
//	@Override
//	public Transaction updateTransaction(Long transactionId, Transaction transaction) {
//		Transaction t2 = transactionDao.findById(transactionId)
//				.orElseThrow(()->new ResourceNotFoundException("invalid id"));
//		t2.setQuantity_issued(transaction.getQuantity_issued());
//		t2.settrans_date(transaction.gettrans_date());
//		t2.setbloodBank(transaction.getbloddBank());
//		return transactionDao.save(t2);
//			
//	}
//
//	@Override
//	public List<TransactionResDto> getAllTransaction() {
//		return transactionDao.findAll().stream()
//				.map(transaction->modelMapper.map(transaction,TransactionResDto.class))
//				.collect(Collectors.toList());
//	}
//}
