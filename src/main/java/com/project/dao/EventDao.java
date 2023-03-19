package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.types.EventStatus;


import org.springframework.stereotype.Repository;

import com.project.entity.VisitEvent;

@Repository

public interface EventDao extends JpaRepository<VisitEvent, Long> {

}