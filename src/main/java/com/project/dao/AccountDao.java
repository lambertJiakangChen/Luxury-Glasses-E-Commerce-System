package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Account;

@Repository
public interface AccountDao extends JpaRepository<Account, Long> {
	

}
