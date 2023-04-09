package com.project.dao;

import java.util.Calendar;
import java.util.HashSet;
import javax.swing.event.HyperlinkEvent.EventType;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.project.dao.AccountDao;
import com.project.entity.Account;
import com.project.entity.Address;
import com.project.entity.Item;
import com.project.entity.Sequence;
import com.project.entity.VisitEvent;
import com.project.entity.types.AccountType;
import com.project.entity.types.EventStatus;

import jakarta.annotation.Resource;

@Configuration
public class LoadDatabase {

	private static final Logger log = LoggerFactory.getLogger(LoadDatabase.class);



	@Bean
	CommandLineRunner initDatabase(AccountDao accountDao, CatalogDao catalogDao, SequenceDao sequenceDao, AddressDao addressDao) {
		HashSet<String> color=new HashSet<String>();
		HashSet<String> color1=new HashSet<String>();
		HashSet<String> color2=new HashSet<String>();
		HashSet<String> color3=new HashSet<String>();
		HashSet<String> category=new HashSet<String>();
		HashSet<String> category1=new HashSet<String>();
		HashSet<String> category2=new HashSet<String>();
		HashSet<String> category3=new HashSet<String>();
		color.add("red");  
		color.add("blue");
		color.add("green");
		color1.add("red");
		color1.add("black");
		color2.add("red");
		color2.add("green");
		color2.add("black");
		color2.add("pink");
		color3.add("red");
		color3.add("green");
		color3.add("black");
		color3.add("pink");
		color3.add("yellow");
		category.add("full-frame");
		category.add("semi-rimless");
		category.add("rimless");
		category1.add("rimless");
		category2.add("semi-rimless");
		category2.add("rimless");

		return args -> {
			log.info("Preloading " + sequenceDao.save(new Sequence("ORDER_ITEM", (long) 1)));
			log.info("Preloading " + sequenceDao.save(new Sequence("ORDER", (long) 1)));
			log.info("Preloading " + sequenceDao.save(new Sequence("REVIEW", (long) 1)));

			log.info("Preloading " + addressDao.save(new Address((long) addressDao.count()+1, "Canada", "4161234567", "4700 keele street", null, "North York", "ON", "M3J1P3", true)));

			log.info("Preloading " + accountDao.save(new Account((long) 1, "justinB31", "justin", "bieber", "justin1@gmail.com", "Qwerty12", AccountType.REGULAR, addressDao.getById((long) 1))));
			log.info("Preloading " + accountDao.save(new Account((long) 2, "adminAcc", "Adam", "Smith", "adam12@gmail.com", "Qwerty12", AccountType.ADMIN, addressDao.getById((long) 1))));


			catalogDao.save(new Item((long) 1, "Evelyn", "Oakley" , "Cat eye", "wide", 22.95, "titanium", 12.0, 56.0, 37.0, 140.0, category, color));
			catalogDao.save(new Item((long) 2, "Yomary", "Carrera", "Cat eye", "wide", 25.95, "TR90", 12.0, 56.0, 37.0, 140.0, category2, color));
			catalogDao.save(new Item((long) 3, "Cicely", "Oakley", "Geometric", "wide", 15.00, "TR90", 20.0, 56.18, 45.96, 139.0, category, color3));
			catalogDao.save(new Item((long) 4, "Yomi", "Carrera", "Cat eye", "wide", 15.00, "TR90", 20.0, 56.18, 45.96, 139.0, category2, color2));
			catalogDao.save(new Item((long) 5, "Ace", "Oakley", "Aviator", "wide", 35.95, "mixed", 23.2, 56.02, 46.71, 142.0, category, color));
			catalogDao.save(new Item((long) 6, "Litisha", "Oakley", "Cat eye", "wide", 28.98, "TR90", 10.4, 56.15, 42.88, 144.0, category, color2)); // sunglasses

			catalogDao.findAll().forEach(item -> {
				log.info("Preloaded " + item);});
			
		};
	}

}
