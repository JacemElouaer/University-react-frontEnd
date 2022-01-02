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

import com.Universite.Entities.Etudiant;
import com.Universite.Metier.EtudiantMetier;



@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping(value="/Etudiant")
public class EtudiantController
{
	@Autowired
	private EtudiantMetier etudiantMetier;
	
	@GetMapping(value="/findEtudiant/{id}")
	public Optional<Etudiant> findEtudiant(@PathVariable (value="id") String id){
		return etudiantMetier.findEtudiant(Long.parseLong(id));
	}
	
	@PostMapping("/etudiant")
	public Etudiant creeEtudiant(@Valid @RequestBody Etudiant etu)
	{
		etudiantMetier.saveEtudiant(etu);
		return etu;
	}
	
	@PutMapping("/UpdateEtudiant")
	public String UpdateEtudiant(@PathVariable @RequestBody Etudiant etu)
	{
		etudiantMetier.saveEtudiant(etu);
		/*
		if(etu==null) {return "impossible de faire l update";}
		etu.setNumInscription(etuDetails.getNumInscription());
		etu.setNameETU(etuDetails.getNameETU());
		etudiantRepository.save(etu);
		 */
		return"success:Update a ete bien faite";
	}
	
	@GetMapping("/getAllEtudiant")
	public List<Etudiant> getAllEtudiant()
	{
		return etudiantMetier.ListEtudiant();
	}
	
	@DeleteMapping(value="/deleteetudiant/{id}")
	public void deleteEtudiant(@PathVariable String id)
	{
		etudiantMetier.removeEtudiant(Long.parseLong(id));
	}
	

}
