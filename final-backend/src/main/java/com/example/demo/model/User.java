package com.example.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="USER")
public class User {

    @Id
    @Column(name="ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="NAME", nullable = false)
    private String name;

    @Column(name="LAST_NAME",nullable = false)
    private String lastName;

    @Column(name ="AGE", nullable = false)
    private Integer age;

    @Column(name= "GENRE",nullable = false)
    private String genre;

    @Column(name="TYPE", nullable = false)
    private String  type;

    @OneToOne
    @JoinColumn(name = "FK_LOGIN", nullable = false)
    private Login logins;

    @ManyToOne
    @JoinColumn(name = "FK_COUNTRY", nullable = false)
    private Country country;


    @OneToMany(cascade = CascadeType.ALL, mappedBy = "users")
    private List<UserEvent> userEventList;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Login getLogins() {
        return logins;
    }

    public void setLogins(Login logins) {
        this.logins = logins;
    }

    public Country getCountry() {
        return country;
    }

    public void setCountry(Country country) {
        this.country = country;
    }

    public List<UserEvent> getUserEventList() {
        return userEventList;
    }

    public void setUserEventList(List<UserEvent> userEventList) {
        this.userEventList = userEventList;
    }
}
