package com.Universite.Entities;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name ="etudiant")
public class Etudiant implements Serializable {
	   @Id
	    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long numInscription;
    
    private String nameETU;
    private String prenomETU;
    private String adresseETU;
	@Column(nullable = true)
	private Date dateEntrée;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "Courses")
	@Column(nullable = true)
	private List<Cours> listCours;
	
	@JsonIgnore
	@ManyToMany(mappedBy = "ListEtudiant")
	@Column(nullable = true)
	private List<Enseignant> listEnseignant;


	public List<Cours> getListCours() {
		return listCours;}
	public List<Enseignant> getListEnseignant() {
		return listEnseignant;
	}
	
	
	public void setListCours(List<Cours> listCours) {
		this.listCours = listCours;
	}
	
	public void setListEnseignant(List<Enseignant> listEnseignant) {
		this.listEnseignant = listEnseignant;
	}

	public Long getNumInscription() {
		return numInscription;
	}

	public void setNumInscription(Long numInscription) {
		this.numInscription = numInscription;
	}

	public String getNameETU() {
		return nameETU;
	}

	public void setNameETU(String nameETU) {
		this.nameETU = nameETU;
	}

	public String getPrenomETU() {
		return prenomETU;
	}

	public void setPrenomETU(String prenomETU) {
		this.prenomETU = prenomETU;
	}

	public String getAdresseETU() {
		return adresseETU;
	}

	public void setAdresseETU(String adresseETU) {
		this.adresseETU = adresseETU;
	}

	public Date getDateEntrée() {
		return dateEntrée;
	}

	public void setDateEntrée(Date dateEntrée) {
		this.dateEntrée = dateEntrée;
	}
    
    
   
    
}
