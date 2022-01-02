package com.Universite.Entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
@Entity
@Table(name ="salle")
public class Salle implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long numS;
    private String nomS;
    private String capacite;

    @OneToOne(mappedBy = "salleName")
    @JsonBackReference
    private Cours cours_Salle;
    public Salle() {

    }
     
    public Salle(String nomS) {
        this.nomS = nomS;
    }
    
    
    public Long getnumS() {
        return numS;
    }

    public void setnumS(Long numS) {
        this.numS = numS;
    }
    
    
    public String getNomS() {
        return nomS;
    }

    public void setNomS(String nomS) {
        this.nomS = nomS;
    }
    
    public String getCapacite() {
        return capacite;
    }

    public void setCapacite(String capacite) {
        this.capacite = capacite;
    }
    
}
