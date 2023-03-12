package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.entity.Item;

@Repository 
public interface CatalogDao extends JpaRepository<Item, Long> {

}
