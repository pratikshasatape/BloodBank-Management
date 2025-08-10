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
//import com.cdac.dao.HospitalDao;
//
//import com.cdac.dto.ApiResponse;
//import com.cdac.dto.HospitalReqDto;
//import com.cdac.dto.HospitalResDto;
//
//import com.cdac.entities.Hospital;
//
//
//import jakarta.transaction.Transactional;
//import jakarta.validation.Valid;
//import lombok.AllArgsConstructor;
//
//@Service
//@Transactional
//@AllArgsConstructor
//
//
//public class HospitalServiceImpl implements HospitalService{
//	
//	private final HospitalDao hospitalDao;
//	private final ModelMapper modelMapper;
//	
//
//	
//	@Override
//	public HospitalResDto addNewHospital(@Valid HospitalReqDto dto) {
//		if(hospitalDao.findByName(dto.getName()).isEmpty()) {
//			Hospital hospital= modelMapper.map(dto, Hospital.class);
//			return modelMapper.map(hospitalDao.save(hospital),HospitalResDto.class);	
//	}
//throw new ApiException("dup name");
//		
//	}
//	
//	
//	
//	@Override
//	public ApiResponse deleteHospital(String hospitalname) {
//		
//		Hospital hospital= hospitalDao.findByName(hospitalname).orElseThrow(
//				()->new ResourceNotFoundException("name not found"));
//		
//          hospitalDao.delete(hospital);
//		return new ApiResponse("deleted succefully");
//	}
//	
//
//	
//	@Override
//	public Hospital updateHospitals(Long hospitalId, @Valid Hospital hospitals) {
//		Hospital h2=hospitalDao.findById(hospitalId).orElseThrow(()->new ResourceNotFoundException("invalid id"));
//		h2.setname(hospitals.getname());
//		h2.setaddress(hospitals.getaddress());
//		h2.setcontact(hospitals.getcontact());
//		h2.setEmail(hospitals.getEmail());
//		return hospitalDao.save(h2);
//	}
//		
//	
//	@Override
//	public List<HospitalResDto> getAllHospitals() {
//		return hospitalDao.findAll().stream()
//				.map(hospital->modelMapper.map(hospital, HospitalResDto.class))
//				.collect(Collectors.toList());
//	}
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
