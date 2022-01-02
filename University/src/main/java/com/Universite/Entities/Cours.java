package com.Universite.Entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name ="cours")
public class Cours implements Serializable {
	

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long codeC;
    private String libelleC;
    

	@OneToMany(mappedBy = "cours", cascade = CascadeType.ALL)
	@JsonIgnore
    private List<Enseignant> enseignants;
   
	@JsonManagedReference
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Salle salleName;
    
    @ManyToMany
    @JoinTable(
      name = "course_etudiant", 
      joinColumns = @JoinColumn(name = "student_id"), 
      inverseJoinColumns = @JoinColumn(name = "course_id"))
	  
    private List<Etudiant> Courses;

	public Long getCodeC() {
		return codeC;
	}

	public void setCodeC(Long codeC) {
		this.codeC = codeC;
	}

	public String getLibelleC() {
		return libelleC;
	}

	public void setLibelleC(String libelleC) {
		this.libelleC = libelleC;
	}

	public List<Enseignant> getEnseignants() {
		return enseignants;
	}

	public void setEnseignants(List<Enseignant> enseignants) {
		this.enseignants = enseignants;
	}


	public Long getSalleName() {
		return salleName.getnumS();
	}

	public void setSalleName(Salle salleName) {
		this.salleName = salleName;
	}

	public List<Etudiant> getCourses() {
		return this.Courses;
	}

	
	public void setCourses(List<Etudiant> courses) {
		Courses = courses;
	}
    
  
}
