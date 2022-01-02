package com.Universite.Metier;

import java.util.List;
import java.util.Optional;

import com.Universite.Entities.Enseignant;



public interface EnseignantMetier {

	
	void saveEnseignant (Enseignant ens);
	void removeEnseignat(Long Id);
	void updateEnseignant(Enseignant ens);
	List<Enseignant>ListEnseignant();
	Optional<Enseignant> findEnseignant(Long Id);
}
