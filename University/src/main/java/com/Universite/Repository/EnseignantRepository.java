package com.Universite.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Universite.Entities.Enseignant;

public interface EnseignantRepository  extends JpaRepository<Enseignant, Long> {

}
