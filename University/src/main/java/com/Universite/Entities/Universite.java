package com.Universite.Entities;
import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
public class Universite implements Serializable{
	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long codeUNV;
	private String nomUNV;
	private String adresseSite; 
	
	
	@OneToMany(mappedBy = "university")
	@JsonManagedReference
    @JsonIgnore
	private List<Departement> departements;
	public Long getCodeUNV() {
		return codeUNV;
	}
	public void setCodeUNV(Long codeUNV) {
		this.codeUNV = codeUNV;
	}
	public String getNomUNV() {
		return nomUNV;
	}
	public void setNomUNV(String nomUNV) {
		this.nomUNV = nomUNV;
	}
	public String getAdresseSite() {
		return adresseSite;
	}
	public void setAdresseSite(String adresseSite) {
		this.adresseSite = adresseSite;
	}
	public List<Departement> getDepartements() {
		return departements;
	}
	public void setDepartements(List<Departement> departements) {
		this.departements = departements;
	}
	public Universite(String nomUNV, String adresseSite) {
		super();
		this.nomUNV = nomUNV;
		this.adresseSite = adresseSite;
	}
	public Universite() {
		super();
	}
	

}
