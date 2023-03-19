package com.project.Analytics;

import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Optional;

import org.hibernate.mapping.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.project.catalog.CatalogService;
import com.project.dao.CatalogDao;
import com.project.dao.EventDao;
import com.project.dao.OrderDao;
import com.project.dao.OrderItemDao;
import com.project.entity.Order;
import com.project.entity.OrderItem;
import com.project.entity.VisitEvent;
import com.project.entity.types.OrderStatus;
import com.project.entity.Account;
import com.project.entity.Item;

@Service
public class AnalyticsService {
	
	@Autowired 
	private CatalogDao catalogDao;

	@Autowired
	private OrderDao orderDao;
	
	@Autowired
	private OrderItemDao orderItemDao;
	
	@Autowired
	EventDao eventDao;
	
	public Collection<Item> monthlyorders (int month){
		Collection<Order> order = new ArrayList<Order>();
		Collection<OrderItem> orderItems = new ArrayList<OrderItem>();
		Collection<Item> Items = new ArrayList<Item>();
		for (Order i: orderDao.findAll()) {
			if (i.getStatus().equals(OrderStatus.ORDERED) && i.getmonth()== month) {
				order.add(i);
			}
		}
		for (Order o : order) {
			for (OrderItem i: orderItemDao.findAll() ) {
				if (o.getId().equals(i.getOrderId())) {
					orderItems.add(i);
				}
			}
		}
		for (OrderItem o : orderItems) {
			for (Item i: catalogDao.findAll()) {
				if (o.getItem().equals(i)){
					Items.add(i);
				}
			}
		}
		return Items;
	}
	
	public Collection<VisitEvent> webUsage(){
		Collection<VisitEvent> event = new ArrayList<VisitEvent>();
		for (VisitEvent i: eventDao.findAll()) {
				event.add(i);
		}
		return event;
	}

}
