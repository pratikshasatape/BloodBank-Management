package com.cdac.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cdac.entities.Donor;

import jakarta.validation.Valid;

public interface DonorDao extends JpaRepository<Donor, Long> {

	Optional<Donor> findByName(String name);

	//Optional<Donor> findById(Long donorId );

	Optional<Donor> findByDonorid(@Valid Long donorID);
}
