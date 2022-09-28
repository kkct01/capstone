package com.movie.backend.entity;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name = "movies")
public class Movie {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	private String title;
	@Temporal(TemporalType.DATE)
	private Date opening;
	private String duration;
	private String language;
	private String director;
	private String cast;
	private Integer price = 30;
	@Lob	
	private String synopsis;
	private String posterLink;
//	
	public Integer getPrice() {
		return price;
	}
	public void setPrice(Integer price) {
		this.price = price;
	}
		
	public Movie() {
		super();
	}
	
	public Movie(Integer id, String title, Date opening, String duration, String language, String director, String cast,
			Integer price, String synopsis, String posterLink) {
		super();
		this.id = id;
		this.title = title;
		this.opening = opening;
		this.duration = duration;
		this.language = language;
		this.director = director;
		this.cast = cast;
		this.price = price;
		this.synopsis = synopsis;
		this.posterLink = posterLink;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Date getOpening() {
		return opening;
	}
	public void setOpening(Date opening) {
		this.opening = opening;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getCast() {
		return cast;
	}
	public void setCast(String cast) {
		this.cast = cast;
	}
	public String getSynopsis() {
		return synopsis;
	}
	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}
	public String getPosterLink() {
		return posterLink;
	}
	public void setPosterLink(String posterLink) {
		this.posterLink = posterLink;
	}
	
	
}
