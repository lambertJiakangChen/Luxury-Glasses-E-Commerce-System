package com.project.ctrl;

import java.io.IOException;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.Analytics.AnalyticsService;
import com.project.entity.VisitEvent;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("analytics")
public class analyticsController {
	
	@Autowired AnalyticsService analyticsService;
	
	@RequestMapping("/monthlysolditems")
	String itemsSoldMonthly (HttpServletRequest request, HttpSession session) {
		if (request.getParameter("month").equals("Jan")) {
			return "Items sold in January" + analyticsService.monthlyorders(0).toString();
		}
		if (request.getParameter("month").equals("Feb")) {
			return "Items sold in February : " +analyticsService.monthlyorders(1).toString();
		}
		if (request.getParameter("month").equals("Mar")) {
			return "Items sold in March : " + analyticsService.monthlyorders(2).toString();
		}
		if (request.getParameter("month").equals("April")) {
			return "Items sold in April : " + analyticsService.monthlyorders(3).toString();
		}
		if (request.getParameter("month").equals("May")) {
			return "Items sold in May : " + analyticsService.monthlyorders(4).toString();
		}
		if (request.getParameter("month").equals("Jun")) {
			return "Items sold in June : " + analyticsService.monthlyorders(5).toString();
		}
		if (request.getParameter("month").equals("Jul")) {
			return "Items sold in July : " + analyticsService.monthlyorders(6).toString();
		}
		if (request.getParameter("month").equals("Aug")) {
			return "Items sold in August : " + analyticsService.monthlyorders(7).toString();
		}
		if (request.getParameter("month").equals("Sep")) {
			return "Items sold in September : " + analyticsService.monthlyorders(8).toString();
		}
		if (request.getParameter("month").equals("Oct")) {
			return "Items sold in October : " + analyticsService.monthlyorders(9).toString();
		}
		if (request.getParameter("month").equals("Nov")) {
			return "Items sold in November : " + analyticsService.monthlyorders(10).toString();
		}
		if (request.getParameter("month").equals("Dec")) {
			return "Items sold in December : " + analyticsService.monthlyorders(11).toString();
		}
		return "pick a month";
	}
	
	@RequestMapping("/webusage")
	Collection<VisitEvent> websiteUsage (HttpServletRequest request, HttpSession session) {
		return analyticsService.webUsage();
	}
	

}
