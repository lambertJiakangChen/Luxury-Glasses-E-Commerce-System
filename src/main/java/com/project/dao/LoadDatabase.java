package com.project.dao;

import java.util.HashSet;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.project.dao.AccountDao;
import com.project.entity.Account;
import com.project.entity.Item;

@Configuration
public class LoadDatabase {
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	
	  @Bean
	  CommandLineRunner initDatabase(AccountDao accountDao, CatalogDao catalogDao) {

	    return args -> {
	    	log.info("Preloading " + accountDao.save(new Account((long) 1, "justinB31", "justin", "bieber", "justin1@gmail.com", "Qwerty12", "regular", null)));
	    	

	    	catalogDao.save(new Item((long) 12, "Evelyn", "Cat eye", null, 22.95, null, null, 56.0, 37.0, 140.0, new HashSet<String>(), new HashSet<String>()));

            catalogDao.findAll().forEach(item -> {
              log.info("Preloaded " + item);});
	    };
	  }

}
