//package com.cdac.services;
//
//import java.util.List;
//import java.util.stream.Collectors;
//import org.modelmapper.ModelMapper;
//import org.springframework.stereotype.Service;
//import com.cdac.custom_exceptions.ApiException;
//import com.cdac.custom_exceptions.ResourceNotFoundException;
//import com.cdac.dao.DonationDao;
//import com.cdac.dto.ApiResponse;
//import com.cdac.dto.DonationReqDto;
//import com.cdac.dto.DonationResDto;
//import com.cdac.entities.Donation;
//import jakarta.transaction.Transactional;
//import jakarta.validation.Valid;
//import lombok.AllArgsConstructor;
//
//@Service
//@Transactional
//@AllArgsConstructor
//
//public class DonationServiceImpl implements DonationService{
//	
//	private final DonationDao donationDao;
//	private final ModelMapper modelMapper;
//	
//	
//	@Override
//	public DonationResDto addNewDonation(@Valid DonationReqDto dto) {
//		if(donationDao.findByName(dto.getName()).isEmpty()) {
//			 Donation donation=modelMapper.map(dto,Donation.class);
//			return modelMapper.map(donationDao.save(donation), DonationResDto.class);
//			}
//		throw new ApiException("dup name");
//		
//	}
//
//	@Override
//	public ApiResponse deleteDonation(String donationname) {
//		Donation donation = donationDao.findByName(donationname)
//        		  .orElseThrow(()->new ResourceNotFoundException("name not found"));
//		
//		donationDao.delete(donation);
//		return new ApiResponse("deleted succefully");
//	}
//
//	@Override
//	public Donation updateDonation(Long donationID, @Valid Donation donation) {
//		Donation a2=donationDao.findById(donationID).orElseThrow(()->new ResourceNotFoundException("invalid id"));
//		a2.setBloodbank(donation.getBloodbank());
//		a2.setDate(donation.getDate());
//		a2.setQuantity(donation.getQuantity());
//		return donationDao.save(a2);
//		
//	}
//
//	@Override
//	public List<DonationResDto> getAllDonation() {
//		
//		return donationDao.findAll().stream().map(donation->modelMapper
//				.map(donation, DonationResDto.class)).collect(Collectors.toList());
//	}
//
//}
