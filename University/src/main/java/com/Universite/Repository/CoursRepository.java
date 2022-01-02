package com.Universite.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Universite.Entities.Cours;

public interface CoursRepository extends JpaRepository<Cours, Long>{

}
