package com.Universite.Controller;


import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Universite.Entities.Cours;
import com.Universite.Metier.CoursMetier;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(value="/Cours")
public class CoursController
{
	@Autowired
	private CoursMetier coursMetier;
	
	@GetMapping(value="/findCours/{id}")
	public Optional<Cours> findCours(@PathVariable (value="id") String id){
		return coursMetier.findCours(Long.parseLong(id));
	}
	
	@PostMapping("/cours")
	public Cours creeCours(@Valid @RequestBody Cours co)
	{
		coursMetier.saveCours(co);
		return co;
	}
	
	@PutMapping("/UpdateCours")
	public String UpdateCours(@PathVariable @RequestBody Cours co)
	{
		coursMetier.saveCours(co);
//		if(co==null) {return "impossible de faire l update";}
//		co.setCodeC(coDetails.getCodeC());
//		co.setLibelleC(coDetails.getLibelleC());
//		coursRepository.save(co);
	return"success:Update a ete bien faite";
	}
	
	@GetMapping("/getAllCours")
	public List<Cours> getAllCours(){
		return coursMetier.ListCours();
	}
	
	@DeleteMapping(value="/deletecours/{id}")
	public void deleteCours(@PathVariable String id)
	{
		coursMetier.removeCours(Long.parseLong(id));
	}

}
