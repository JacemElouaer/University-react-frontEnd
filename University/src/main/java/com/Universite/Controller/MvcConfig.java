package com.Universite.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

public class MvcConfig implements WebMvcConfigurer {
	@RequestMapping("/Universite")
	public String index() {
		return "Universite";
	}
	
	@RequestMapping("/findDepartements")
	public String Departement() {
		return "departement";
	}
}
