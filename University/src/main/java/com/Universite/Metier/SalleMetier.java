package com.Universite.Metier;

import java.util.List;
import java.util.Optional;

import com.Universite.Entities.Salle;

public interface SalleMetier {

	
	void saveSalle (Salle sal);
	void removeSalle(Long Id);
	void updateSalle(Salle Dep);
	 List<Salle>ListSalle();
	 Optional<Salle> findSalle(Long Id);
	
}
