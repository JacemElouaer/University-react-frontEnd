package com.Universite.Metier;

import java.util.List;

import com.Universite.Entities.Departement;

public interface DepartementMetier {
	void saveDepartement (Departement Dep);
	void removeDepartement(Long Id);
	void updateDepartement(Departement Dep);
	 List<Departement>ListDepartement();
	/* Optional<Departement> findDepartement(Long Id); */
	 
	

}
