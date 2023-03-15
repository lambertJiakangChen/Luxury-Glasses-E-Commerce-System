package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.Order;

public interface OrderDao extends JpaRepository<Order, Long> {

}
