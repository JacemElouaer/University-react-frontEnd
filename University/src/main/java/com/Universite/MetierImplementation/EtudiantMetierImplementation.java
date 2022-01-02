package com.Universite.MetierImplementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Universite.Entities.Etudiant;
import com.Universite.Metier.EtudiantMetier;
import com.Universite.Repository.EtudiantRepository;

@Service
@Transactional
public class EtudiantMetierImplementation implements EtudiantMetier{

	
	@Autowired
	EtudiantRepository etudiantRepository;
	
	@Override
	public List<Etudiant>ListEtudiant(){
		return etudiantRepository.findAll();
	}
	
	@Override
    public void saveEtudiant (Etudiant c) {
		etudiantRepository.save(c);
    }
	
	@Override
	public void removeEtudiant(Long id) {
		etudiantRepository.deleteById(id);
	}
	@Override
	public void updateEtudiant (Etudiant c)
	{
	etudiantRepository.save(c);
	}
	@Override
	public Optional<Etudiant> findEtudiant(Long Id) {
		return etudiantRepository.findById(Id);
	}
}
