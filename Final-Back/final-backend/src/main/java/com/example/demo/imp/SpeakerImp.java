package com.example.demo.imp;

import com.example.demo.Dto.DtoSpeaker;
import com.example.demo.model.Speaker;
import com.example.demo.repository.SpeakRepository;
import com.example.demo.service.SpeakerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SpeakerImp implements SpeakerService {

    @Autowired
    private SpeakRepository speakerRepo;

    @Override
    public Speaker crearOrador(DtoSpeaker speaker) throws Exception {
        Speaker speakerlocal = null;
        try {

        }catch (Exception ex){
            ex.printStackTrace();
        }
        return speakerlocal;
    }

    @Override
    public Boolean eliminarOrador(Long id) throws Exception {
        return null;
    }
}
