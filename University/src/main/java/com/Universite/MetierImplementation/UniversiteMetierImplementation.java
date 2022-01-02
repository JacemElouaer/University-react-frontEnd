package com.Universite.MetierImplementation;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Universite.Entities.Universite;
import com.Universite.Metier.UniversiteMetier;
import com.Universite.Repository.UniversityRepository;



@Service
@Transactional
	
	public class UniversiteMetierImplementation  implements UniversiteMetier{
	@Autowired	 
	UniversityRepository universityRepository;
		
		
			@Override
			public void saveUniversite(Universite uni) {
				universityRepository.save(uni);
			}
			
			
			@Override
			public void updateUniversite(Universite uni) {
				universityRepository.save(uni);
			}
			
			@Override
			public List<Universite>ListUniversite(){
				return universityRepository.findAll();
			}

		}



