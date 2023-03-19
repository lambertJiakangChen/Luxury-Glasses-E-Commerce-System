package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Order;


import org.springframework.stereotype.Repository;

import com.project.entity.Order;

@Repository

public interface OrderDao extends JpaRepository<Order, Long> {

}
