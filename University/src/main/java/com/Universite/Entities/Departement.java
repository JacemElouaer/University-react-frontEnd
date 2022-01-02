package com.Universite.Entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
public class Departement implements Serializable{
	@Id @GeneratedValue
	private Long codeDEP;
	private String nomDEP;
	private String Description; 
	
	@ManyToOne 
	@JsonBackReference
	private Universite university;
	
	
	@OneToMany(mappedBy = "departementEns") 
	@JsonIgnore
	private List<Enseignant> enseignants;
	
	public Long getCodeDEP() {
		return codeDEP;
	}
	public void setCodeDEP(Long codeDEP) {
		this.codeDEP = codeDEP;
	}
	public String getNomDEP() {
		return nomDEP;
	}
	public void setNomDEP(String nomDEP) {
		this.nomDEP = nomDEP;
	} 
	
	public String getDesc() {
		return Description;
	}
	public void setDesc(String Description) {
		this.Description = Description;
	} 
	public Long getUniversity() {
		return university.getCodeUNV();
	} 

	public void setUniversity(Universite university) {
		this.university = university;
	}
	public Collection<Enseignant> getEnseignants() {
		return enseignants;
	}
	public void setEnseignants(List<Enseignant> enseignants) {
		this.enseignants = enseignants;
	}
	public Departement(Long codeDEP, String nomDEP, Universite universite, String Description ) {
		super();
		this.codeDEP = codeDEP;
		this.nomDEP = nomDEP;
		this.university = universite; 
		this.Description =  Description;  
	}
	public Departement() {
		super();
	}
}
