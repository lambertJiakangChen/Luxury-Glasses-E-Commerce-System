package com.project.validator;

import org.springframework.validation.Errors;
import org.springframework.validation.ValidationUtils;
import org.springframework.validation.Validator;

import com.project.checkout.CheckoutService;

public class CheckoutValidator implements Validator {

	@Override
	public boolean supports(Class<?> clazz) {
		return clazz==CheckoutService.class;
	}

	@Override
	public void validate(Object target, Errors errors) {
		CheckoutService checkout = (CheckoutService) target;

		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "country", "NotEmpty.checkout.country");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "name", "NotEmpty.checkout.name");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "phone", "NotEmpty.checkout.phone");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "line1", "NotEmpty.checkout.line1");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "city", "NotEmpty.checkout.city");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "province", "NotEmpty.checkout.province");
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "postal", "NotEmpty.checkout.postal");
		
		ValidationUtils.rejectIfEmptyOrWhitespace(errors, "city", "NotEmpty.checkout.city");
		
		
	}

}
