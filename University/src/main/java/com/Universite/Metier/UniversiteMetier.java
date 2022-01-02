package com.Universite.Metier;

import java.util.List;

import com.Universite.Entities.Universite;

public interface UniversiteMetier {
	void saveUniversite(Universite uni);
	void updateUniversite(Universite uni);
	 List<Universite>ListUniversite();
}
