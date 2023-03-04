package com.project.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.project.dao.AccountDao;
import com.project.entity.Account;

@Configuration
public class LoadDatabase {
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	
	  @Bean
	  CommandLineRunner initDatabase(AccountDao dao) {

	    return args -> {
	    	log.info("Preloading " + dao.save(new Account((long) 1, "justinB31", "justin", "bieber", "justin1@gmail.com", "Qwerty12", "regular", null)));
	    };
	  }
	

}
