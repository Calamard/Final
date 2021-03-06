package com.example.demo.imp;


import com.example.demo.Dto.DtoDeleteLogin;
import com.example.demo.Dto.DtoLogin;
import com.example.demo.Dto.DtoSession;
import com.example.demo.exception.*;
import com.example.demo.model.Country;
import com.example.demo.model.Login;
import com.example.demo.model.User;
import com.example.demo.model.UserEvent;
import com.example.demo.repository.CountryRepository;
import com.example.demo.repository.LoginRepository;
import com.example.demo.repository.UserRepository;

import com.example.demo.service.LoginService;
import com.example.demo.util.Constant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.TreeMap;


@Service
public class LoginImp implements LoginService {

    @Autowired
    private LoginRepository loginRepo;

    @Autowired
    private UserRepository userRepo;

    @Autowired
    private CountryRepository countRepo;

    @Override
    public Boolean createUser(DtoLogin dtoLogin) throws Exception {
        Boolean create =false;
        Login log = null;
        User use = null;
        Country cou = null;

        try{
            Login validaMail = loginRepo.findByEmail(dtoLogin.getEmailDto());
            User validaRut = userRepo.findByRut(dtoLogin.getRutDto());
            Country validaPais = countRepo.findByName(dtoLogin.getCountryDto());

            if(validaRut == null && validaMail == null && validaPais == null) {

                log = new Login();
                log.setEmail(dtoLogin.getEmailDto());
                log.setPassword(dtoLogin.getPasswordDto());
                loginRepo.save(log);

                cou = new Country();
                cou.setName(dtoLogin.getCountryDto());
                countRepo.save(cou);

                use = new User();
                use.setRut(dtoLogin.getRutDto());
                use.setName(dtoLogin.getNameDto());
                use.setLastName(dtoLogin.getLastNameDto());
                use.setAge(dtoLogin.getAgeDto());
                use.setGenre(dtoLogin.getGenreDto());
                use.setType("comun");
                use.setCountry(cou);
                use.setLogin(log);


                userRepo.save(use);



                log.setUser(use);
                return create =true;

            }

            if(validaRut == null && validaMail == null && validaPais != null){
                log = new Login();
                log.setEmail(dtoLogin.getEmailDto());
                log.setPassword(dtoLogin.getPasswordDto());
                loginRepo.save(log);

                cou = validaPais;

                use = new User();
                use.setRut(dtoLogin.getRutDto());
                use.setName(dtoLogin.getNameDto());
                use.setLastName(dtoLogin.getLastNameDto());
                use.setAge(dtoLogin.getAgeDto());
                use.setGenre(dtoLogin.getGenreDto());
                use.setType("comun");
                use.setCountry(cou);
                use.setLogin(log);

                userRepo.save(use);

                log.setUser(use);
                return create =true;
            }
            if (validaMail != null && validaRut == null) {
                throw new MailExisteException(Constant.ERROR_MAIL_EXISTE);
            }
            else {
                throw new UsuarioExistenteException(Constant.ERROR_USUARIO_CREADO);
            }

        }catch (MailExisteException ex) {
            ex.printStackTrace();
            throw new MailExisteException(ex.getMessage());
        }catch (UsuarioExistenteException ex) {
            ex.printStackTrace();
            throw new UsuarioExistenteException(ex.getMessage());
        }catch (Exception ex){
            ex.printStackTrace();
            throw new Exception(Constant.ERROR_SISTEMA);
        }


    }

    @Override
    public Boolean deleteUser(DtoDeleteLogin delete) throws Exception {
        Boolean elimi = false;
        try {

            User buscarUser = userRepo.findByid(delete.getIdDelete());
            Login buscarMail =  loginRepo.findByEmail(buscarUser.getLogin().getEmail());


            if (buscarMail != null && buscarMail.getPassword() == delete.getPassDelete()) {

                loginRepo.delete(buscarMail);
                userRepo.delete(buscarUser);
                return elimi = true;
            }
            if (buscarMail != null && buscarMail.getPassword() != delete.getPassDelete()) {
                throw new IncorrectException(Constant.ERROR_INCORRECTO);
            }
            if(buscarMail== null){
                throw new NoEncontradoException(Constant.ERROR_NO_ENCONTRADO);
            }
        }catch (IncorrectException ex) {
            ex.printStackTrace();
            throw new IncorrectException(ex.getMessage());
        }catch (NoEncontradoException ex) {
            ex.printStackTrace();
            throw new NoEncontradoException(ex.getMessage());
        }catch (Exception ex){
            ex.printStackTrace();
            throw new Exception(Constant.ERROR_SISTEMA);
        }
        return elimi;
    }

    @Override
    public Boolean session(DtoSession dto) throws Exception {
        Boolean valido = false;
        try{
            Login validarmail = loginRepo.findByEmail(dto.getEmailD());
            String pass = validarmail.getPassword();
            String passdto = dto.getPassD();
            if( pass.equals(passdto)){
                return valido = true;
            }
            if( !pass.equals(passdto)){
                throw new IncorrectException(Constant.ERROR_INCORRECTO);
            }

            throw new IncorrectException(Constant.ERROR_INCORRECTO);

        }catch (IncorrectException ex) {
            ex.printStackTrace();
            throw new IncorrectException(ex.getMessage());
        }catch (Exception ex){
            ex.printStackTrace();
            throw new Exception(Constant.ERROR_SISTEMA);
        }

    }
/*
Giovanna Tapia
giovannatss27@gmail.com
 */
}
