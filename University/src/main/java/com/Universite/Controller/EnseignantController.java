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

import com.Universite.Entities.Enseignant;
import com.Universite.Metier.EnseignantMetier;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/Enseignant")
public class EnseignantController
{
	@Autowired
	private EnseignantMetier enseignantMetier;
	
	@GetMapping(value="/findEnseignant/{id}")
	public Optional<Enseignant> findEnseignant(@PathVariable (value="id") String id){
		return enseignantMetier.findEnseignant(Long.parseLong(id));
	}
	
	@PostMapping("/enseignant")
	public Enseignant creeEnseignant(@Valid @RequestBody Enseignant en)
	{
		enseignantMetier.saveEnseignant(en);
		return en;
	}
	
	@PutMapping("/UpdateEnseignant")
	public void UpdateEnseignant(@PathVariable @RequestBody Enseignant en)
	{
		enseignantMetier.saveEnseignant(en);
	}
	
	@GetMapping("/getAllEnseignant")
	public List<Enseignant> getAllEnseignant()
	{
		return enseignantMetier.ListEnseignant();
	}
	
	@DeleteMapping(value="/deleteenseignant/{id}")
	public String deleteEnseignant(@PathVariable String id)
	{
		enseignantMetier.removeEnseignat(Long.parseLong(id));
		return "ok!";
	}

}
