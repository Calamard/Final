package com.example.demo.model;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.Size;
import java.util.Optional;

@Entity
@Table(name = "LOGINS")
public class Login {

    @Id
    @Column(name ="ID", nullable = false,  unique = true)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Size(min = 5, max = 30)
    @Column(name ="EMAIL", nullable = false ,length = 30)
    @Email
    private String email;

    @Size(min = 3)
    @Column(name= "PASSWORD", nullable = false)
    private String password;

    @OneToOne(mappedBy = "login",cascade = CascadeType.ALL)
    private User user;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
    /*
Giovanna Tapia
giovannatss27@gmail.com
 */
}
