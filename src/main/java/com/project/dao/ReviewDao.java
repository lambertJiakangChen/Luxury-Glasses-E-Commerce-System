package com.project.dao;

import java.util.List;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.project.entity.Review;

@Repository 
public interface ReviewDao extends JpaRepository<Review, Long> {
	List<Review> findAll();

}