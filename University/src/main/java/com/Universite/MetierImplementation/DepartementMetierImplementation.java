package com.Universite.MetierImplementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Universite.Entities.Departement;
import com.Universite.Metier.DepartementMetier;
import com.Universite.Repository.DepartementRepository;

@Service
@Transactional

public class DepartementMetierImplementation implements DepartementMetier{
	@Autowired
	DepartementRepository departementRepository;

	
	@Override
	public void saveDepartement(Departement Dep) {
		departementRepository.save(Dep);
    }
	
	
	@Override
	public  List<Departement>ListDepartement(){
		return departementRepository.findAll();
	}

	
 
	
	@Override
	public void updateDepartement(Departement Dep)
	{
		departementRepository.save(Dep);
	}

	@Override
	public void removeDepartement(Long id) {
		departementRepository.deleteById(id);
	}

	/*
	 * @Override public Optional<Departement> findDepartement(Long Id) { return
	 * departementRepository.findById(Id); }
	 */
}
	