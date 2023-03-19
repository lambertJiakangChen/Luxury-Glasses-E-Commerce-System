package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.Sequence;

@Repository
public interface SequenceDao extends JpaRepository<Sequence, Long> {

}
