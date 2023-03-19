package com.project.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.entity.OrderItem;

@Repository
public interface OrderItemDao extends JpaRepository<OrderItem, Long> {

}
