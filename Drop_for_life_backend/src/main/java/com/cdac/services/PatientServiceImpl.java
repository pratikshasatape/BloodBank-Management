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
//import com.cdac.dao.DonorDao;
//import com.cdac.dao.PatientDao;
//import com.cdac.dto.ApiResponse;
//import com.cdac.dto.DonorResDto;
//import com.cdac.dto.PatientReqDto;
//import com.cdac.dto.PatientResDto;
//import com.cdac.entities.Donor;
//import com.cdac.entities.Patient;
//
//import jakarta.transaction.Transactional;
//import lombok.AllArgsConstructor;
//
//@Service
//@Transactional
//@AllArgsConstructor
//public class PatientServiceImpl implements PatientService{
//	
//	private final PatientDao patientDao;
//	private final ModelMapper modelMapper;
//	
//	
//	@Override
//	public PatientResDto addNewPatient(PatientReqDto dto) {
//		if(patientDao.findByName(dto.getName()).isEmpty()) {
//			Patient patient= modelMapper.map(dto, Patient.class);
//			return modelMapper.map(patientDao.save(patient),PatientResDto.class);	
//	}
//throw new ApiException("dup name");
//		
//	}
//
//	@Override
//	public ApiResponse deletePatient(String patientname) {
//		Patient patient = patientDao.findByName(patientname).orElseThrow(()->new ResourceNotFoundException("name not found"));
//		
//		patientDao.delete(patient);
//		return new ApiResponse("deleted succefully");
//	}
//		
//	
//
//	@Override
//	public Patient updatePatients(Long patientId, Patient patients) {
//		Patient p2=patientDao.findById(patientId).orElseThrow(()->new ResourceNotFoundException("invalid id"));
//		p2.setName(patients.getName());
//		p2.setAddress(patients.getAddress());
//		p2.setAge(patients.getAge());
//		p2.setBloodGroup(patients.getBloodGroup());
//		p2.setContact(patients.getContact());
//		p2.setEmail(patients.getEmail());
//		p2.setGender(patients.getGender());
//		
//		return patientDao.save(p2);
//	}
//
//	@Override
//	public List<PatientResDto> getAllPatients() {
//		return patientDao.findAll().stream()
//				.map(patient->modelMapper.map(patient, PatientResDto.class))
//				.collect(Collectors.toList());
//	}
//
//}
