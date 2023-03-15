package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.entity.OrderItem;

public interface OrderItemDao extends JpaRepository<OrderItem, Long> {

}
