package com.Universite.MetierImplementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Universite.Entities.Cours;
import com.Universite.Metier.CoursMetier;
import com.Universite.Repository.CoursRepository;
@Service
@Transactional

public class CoursMetierImplementation implements CoursMetier{

	@Autowired
	CoursRepository coursRepository;
	
	@Override
	public List<Cours>ListCours(){
		return coursRepository.findAll();
	}
	
	@Override
    public void saveCours (Cours c) {
       coursRepository.save(c);
    }
	
	@Override
	public void removeCours(Long id) {
		coursRepository.deleteById(id);
	}
	@Override
	public void updateCours (Cours c)
	{
		coursRepository.save(c);
	}
	@Override
	public Optional<Cours> findCours(Long Id) {
		return coursRepository.findById(Id);
	}
}
