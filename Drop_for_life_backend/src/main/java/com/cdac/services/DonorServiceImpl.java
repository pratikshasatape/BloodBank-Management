package com.cdac.services;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import com.cdac.custom_exceptions.ApiException;
import com.cdac.custom_exceptions.ResourceNotFoundException;
import com.cdac.dao.DonorDao;
import com.cdac.dto.ApiResponse;
import com.cdac.dto.DonorReqDto;
import com.cdac.dto.DonorResDto;
import com.cdac.entities.Donor;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.AllArgsConstructor;

@Service
@Transactional
@AllArgsConstructor
public class DonorServiceImpl implements DonorService {

	private final DonorDao donorDao;
	private final ModelMapper modelMapper;
	
	@Override
	public DonorResDto addNewDonor(@Valid DonorReqDto dto) {
		if(donorDao.findByName(dto.getName()).isEmpty()) {
			Donor donor=modelMapper.map(dto, Donor.class);
			return modelMapper.map(donorDao.save(donor),DonorResDto.class);
			
		}
		
		throw new ApiException("dup name");
		
	}
	
	@Override
	public ApiResponse deleteDonor(Long donorid) {
		Donor donor = donorDao.findByDonorid(donorid).orElseThrow(()->new ResourceNotFoundException("name not found"));
		
		donorDao.delete(donor);
		return new ApiResponse("deleted succefully");
	}
	
	@Override
	public Donor updateDonors(@Valid Long donorID, Donor donors) {
		System.out.println("donorId"+ donorID);
		Donor d2=donorDao.findByDonorid(donorID).orElseThrow(()->new ResourceNotFoundException("invalid id"));
		d2.setName(donors.getName());
		d2.setAddress(donors.getAddress());
		d2.setAge(donors.getAge());
		d2.setBloodGroup(donors.getBloodGroup());
		d2.setContact(donors.getContact());
		d2.setEmail(donors.getEmail());
		d2.setGender(donors.getGender());
		d2.setLast_Donation_date(donors.getLast_Donation_date());
		return donorDao.save(d2);
		
	}

	@Override
	public List<DonorResDto> getAllDonors() {
		
		return donorDao.findAll().stream().map(donor->modelMapper.map(donor, DonorResDto.class)).collect(Collectors.toList());
	}
	

	
	
	
	

}
