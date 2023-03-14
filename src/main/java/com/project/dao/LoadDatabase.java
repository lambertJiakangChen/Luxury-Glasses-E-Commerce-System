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
import com.project.entity.types.AccountType;

@Configuration
public class LoadDatabase {
	
	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);
	
	  @Bean
	  CommandLineRunner initDatabase(AccountDao accountDao, CatalogDao catalogDao) {
            HashSet<String> color=new HashSet<String>();
		HashSet<String> color1=new HashSet<String>();
		HashSet<String> color2=new HashSet<String>();
		HashSet<String> category=new HashSet<String>();
		HashSet<String> category1=new HashSet<String>();
		HashSet<String> category2=new HashSet<String>();
		color.add("red");  
		color.add("blue");
		color.add("green");
		color1.add("red");
		color1.add("black");
		color2.add("red");
		color2.add("green");
		color2.add("black");
		color2.add("pink");
		category.add("full-frame");
		category.add("semi-rimless");
		category.add("rimless");
		category1.add("rimless");
		category2.add("semi-rimless");
		category2.add("rimless");

	    return args -> {
	    	log.info("Preloading " + accountDao.save(new Account((long) 1, "justinB31", "justin", "bieber", "justin1@gmail.com", "Qwerty12", AccountType.REGULAR, null)));
	    	log.info("Preloading " + accountDao.save(new Account((long) 2, "adminAcc", "Adam", "Smith", "adam12@gmail.com", "Qwerty12", AccountType.ADMIN, null)));

	    	
	    	catalogDao.save(new Item((long) 1, "Evelyn", "Oakley" , "Cat eye", "wide", 22.95, "titanium", 12.0, 56.0, 37.0, 140.0, category, color));
	    	catalogDao.save(new Item((long) 2, "Yomary", "Carrera", "Cat eye", "wide", 25.95, "TR90", 19.2, 57.0, 48.0, 140.0, category1, color1));
	    	catalogDao.save(new Item((long) 3, "Cicely", "Oakley", "Geometric", "wide", 15.00, "TR90", 20.0, 56.18, 45.96, 139.0, category2, color2));
		    
            catalogDao.findAll().forEach(item -> {
              log.info("Preloaded " + item);});
	    };
	  }

}
