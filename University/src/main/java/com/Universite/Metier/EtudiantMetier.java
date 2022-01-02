package com.Universite.Metier;

import java.util.List;
import java.util.Optional;

import com.Universite.Entities.Etudiant;

public interface EtudiantMetier {
	void saveEtudiant (Etudiant e);
	void removeEtudiant(Long Id);
	void updateEtudiant(Etudiant e);
	 List<Etudiant>ListEtudiant();
	 Optional<Etudiant> findEtudiant(Long Id);
}
