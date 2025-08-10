package com.cdac.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.cdac.dto.ApiResponse;
import com.cdac.dto.DonorReqDto;
import com.cdac.dto.DonorResDto;
import com.cdac.entities.Donor;


@Service
public interface DonorService {
	DonorResDto addNewDonor( DonorReqDto dto);

	ApiResponse deleteDonor(Long donorid);

	Donor updateDonors(Long donorId, Donor donors);
	
	List<DonorResDto> getAllDonors();
}
