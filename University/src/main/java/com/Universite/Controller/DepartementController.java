package com.Universite.Controller;

import java.util.List;

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

import com.Universite.Entities.Departement;
import com.Universite.Metier.DepartementMetier;

@CrossOrigin(origins="*",allowedHeaders="*")
@RestController
@RequestMapping(value="/departement")
public class DepartementController
{
	@Autowired
	private DepartementMetier departementMetier;
	
	/*
	 * @GetMapping (value="/findDepartement/{id}") public Optional<Departement>
	 * findDepartement(@PathVariable (value="id") String id){ return
	 * departementMetier.findDepartement(Long.parseLong(id)); }
	 */
	
	@PostMapping("/departement")
	public Departement creedepartement(@Valid @RequestBody Departement Dep)
	{
		departementMetier.saveDepartement(Dep);
		return Dep;
	}
	
	@PutMapping("/UpdateDepartement")
	public String UpdateDepartement(@PathVariable @RequestBody Departement dep)
	{
		departementMetier.saveDepartement(dep);
	//if(dep==null) {return "impossible de faire l update";}
	//dep.setCodeDEP(depDetails.getCodeDEP());
	//dep.setNomDEP(depDetails.getNomDEP());
	//departementRepository.save(dep);
	return"success:Update a ete bien faite";
	}
	
	@GetMapping("/getall" )
	public List<Departement> getAllDepartements()
	{ 
		return departementMetier.ListDepartement();
		
	}
	
	@DeleteMapping(value="/delete departement/{id}")
	public String deleteDepartement(@PathVariable String id)
	{
		departementMetier.removeDepartement(Long.parseLong(id));
		return "ok!";
	}

}
