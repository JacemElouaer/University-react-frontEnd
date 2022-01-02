package com.Universite.Controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.Universite.Entities.Universite;
import com.Universite.Metier.UniversiteMetier;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/universitie")
public class UniversiteController
{
	@Autowired
	private UniversiteMetier universiteMetier;
	
	
	@PostMapping("/universite")
	public Universite creeuniversite(@Valid @RequestBody Universite uni)
	{
		universiteMetier.saveUniversite(uni);
		return uni;
	}
	
	
	
	@PutMapping("/UpdateUniversite")
	public String UpdateUniversite(@PathVariable @RequestBody Universite uni)
	{
		universiteMetier.saveUniversite(uni);
		
		return"success:Update a ete bien faite";
	}
	
	@GetMapping("/getAllUniversite")
	public List<Universite> getAllUniversite()
	{
		return universiteMetier.ListUniversite();
	}
	
	
}
