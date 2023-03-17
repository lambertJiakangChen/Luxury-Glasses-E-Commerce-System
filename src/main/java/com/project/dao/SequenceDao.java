package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Sequence;

public interface SequenceDao extends JpaRepository<Sequence, Long> {

}
