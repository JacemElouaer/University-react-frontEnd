package com.Universite.Entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
public class Enseignant implements Serializable{
	@Id @GeneratedValue
	private Long matricule;
	private String nomENS;
	private String prenomENS;
	private String adresseENS;
	private String diplome;
	@ManyToOne
	private Cours cours;


	@ManyToMany
	@JoinTable(
	  name = "etudiant_enseignant", 
	  joinColumns = @JoinColumn(name = "student_id"), 
	  inverseJoinColumns = @JoinColumn(name = "enseignant_id"))
	List<Etudiant> ListEtudiant;

	@ManyToOne
	private Departement departementEns;



	public Cours getCours() {
		return cours;
	}
public void setCours(Cours cours) {
		this.cours = cours;
	}

	public Long getMatricule() {
		return matricule;
	}
	public void setDepartementEns(Departement departementEns) {
		this.departementEns = departementEns;
	}
	public void setMatricule(Long matricule) {
		this.matricule = matricule;
	}
	public String getNomENS() {
		return nomENS;
	}
	public void setNomENS(String nomENS) {
		this.nomENS = nomENS;
	}
	public String getPrenomENS() {
		return prenomENS;
	}
	public void setPrenomENS(String prenomENS) {
		this.prenomENS = prenomENS;
	}
	public String getAdresseENS() {
		return adresseENS;
	}
	public void setAdresseENS(String adresseENS) {
		this.adresseENS = adresseENS;
	}
	public String getDiplome() {
		return diplome;
	}
	public void setDiplome(String diplome) {
		this.diplome = diplome;
	}
	public Departement getDepartements() {
		return departementEns;
	}
	public void setDepartements(Departement departements) {
		this.departementEns = departements;
	}
	public Enseignant(String nomENS, String prenomENS, String adresseENS, String diplome) {
		super();
		this.nomENS = nomENS;
		this.prenomENS = prenomENS;
		this.adresseENS = adresseENS;
		this.diplome = diplome;
	}
	public Enseignant() {
		super();
	}
	

	@Override
	public String toString() {
		return "{" +
			" matricule='" + getMatricule() + "'" +
			", nomENS='" + getNomENS() + "'" +
			", prenomENS='" + getPrenomENS() + "'" +
			", adresseENS='" + getAdresseENS() + "'" +
			", diplome='" + getDiplome() + "'" +
			"}";
	}
	

}
