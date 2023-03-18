package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Address;

public interface AddressDao extends JpaRepository<Address, Long> {

}
