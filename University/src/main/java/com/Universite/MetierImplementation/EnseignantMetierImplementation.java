package com.Universite.MetierImplementation;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Universite.Entities.Enseignant;
import com.Universite.Metier.EnseignantMetier;
import com.Universite.Repository.EnseignantRepository;
@Service
@Transactional

public class EnseignantMetierImplementation implements EnseignantMetier {
	@Autowired
	EnseignantRepository enseignantRepository;
	
		@Override
		public void saveEnseignant (Enseignant ens) {
			enseignantRepository.save(ens);
		}
		
		@Override
		public void removeEnseignat(Long Id){
			enseignantRepository.deleteById(Id);
		} 
		@Override
		public void updateEnseignant(Enseignant ens) {
			enseignantRepository.save(ens);
		}
		
		@Override
		public List<Enseignant>ListEnseignant(){
			return enseignantRepository.findAll();
		}
		@Override
		public Optional<Enseignant> findEnseignant(Long Id) {
			return enseignantRepository.findById(Id);
		}
}
