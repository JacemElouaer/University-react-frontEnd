package com.Universite.Metier;

import java.util.List;
import java.util.Optional;

import com.Universite.Entities.Cours;

public interface CoursMetier {

	 void saveCours( Cours c);
	 void updateCours( Cours c);
	 List<Cours>ListCours();
	 void removeCours(Long Id);
	 Optional<Cours> findCours(Long Id);
}
