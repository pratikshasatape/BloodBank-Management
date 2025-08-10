//package com.cdac.services;
//
//import java.util.List;
//
//import java.util.stream.Collectors;
//import org.modelmapper.ModelMapper;
//import org.springframework.stereotype.Service;
//
//import com.cdac.custom_exceptions.ApiException;
//import com.cdac.custom_exceptions.ResourceNotFoundException;
//import com.cdac.dao.BloodBankDao;
//import com.cdac.dto.ApiResponse;
//import com.cdac.dto.BloodBankReqDto;
//import com.cdac.dto.BloodBankResDto;
//import com.cdac.entities.BloodBank;
//import jakarta.validation.Valid;
//@Service
//public class BloodBankServiceImpl implements BloodBankService
//{
//
//	private  BloodBankDao bloodbankDao ;
//	private  ModelMapper modelMapper;
//	
//	@Override
//	public BloodBankResDto addNewBloodBank(@Valid BloodBankReqDto dto) {
//		if(bloodbankDao.findByName(dto.getName()).isEmpty()) {
//			BloodBank bloodbank= modelMapper.map(dto, BloodBank.class);
//			return modelMapper.map(bloodbankDao.save(bloodbank),BloodBankResDto.class);	
//	}
//throw new ApiException("dup name");
//		
//	}
//
//	@Override
//	public ApiResponse deleteBloodBank(String bloodbankname) {
//		BloodBank bloodbank = bloodbankDao.findByName(bloodbankname)
//				.orElseThrow(()->new ResourceNotFoundException("name not found"));
//		
//		bloodbankDao.delete(bloodbank);
//		return new ApiResponse("deleted succefully");
//	}
//
//	@Override
//	public BloodBank updateBloodBank(Long bloodbankId, @Valid BloodBank bloodbank) {
//		BloodBank bb2= bloodbankDao.findById( bloodbankId)
//				.orElseThrow(()->new ResourceNotFoundException("invalid id"));
//		bb2.setName( bloodbank.getName());
//		//bb2.setLocation bloodbank.getLocation());
//		
//		bb2.setContact( bloodbank.getContact());
//		
//		
//		return  bloodbankDao.save(bb2);
//	}
//
//	@Override
//	public List<BloodBankResDto> getAllBloodBank() {
//		return  bloodbankDao.findAll().stream()
//				.map( bloodbank->modelMapper.map( bloodbank,  BloodBankResDto.class))
//				.collect(Collectors.toList());
//	}
//
//	}
