package com.example.demo.imp;

import com.example.demo.Dto.DtoTalk;
import com.example.demo.model.Event;
import com.example.demo.model.SalonRoom;
import com.example.demo.model.Speaker;
import com.example.demo.model.Talk;
import com.example.demo.repository.EventRepository;
import com.example.demo.repository.SalonRoomRepository;
import com.example.demo.repository.SpeakRepository;
import com.example.demo.repository.TalkRepository;
import com.example.demo.service.TalkService;
import com.example.demo.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TalkImp implements TalkService {
    @Autowired
    private TalkRepository talkRepo;
    @Autowired
    private EventRepository eventRepo;
    @Autowired
    private SpeakRepository speakRepo;
    @Autowired
    private SalonRoomRepository salonRepo;

    @Override
    public Talk createTalk(DtoTalk talk) throws Exception {
        Talk tk = null;
        Event eve = null;
        Speaker spkr = null;
        SalonRoom srm = null;
        try{
            Talk validarName = talkRepo.finByname(talk.getNameDto());
            Event validarEvent = eventRepo.findByName(talk.getNameEventDto());
            Speaker validarSpeaker = speakRepo.findByname(talk.getNameSpeakerDto());
            if(validarName == null && validarEvent == null && validarSpeaker == null){

                eve = new Event();
                eve.setName(talk.getNameEventDto());
                eve.setDuration(talk.getDurationEventDto());
                eve.setDescription(talk.getDescrpEventDto());
                eve.setTime(talk.getTimeEventDto());
                eve.setDate(talk.getDateEventDto());
                eve.setCapacity(talk.getCapEventDto());
                eve = eventRepo.save(eve);

                spkr = new Speaker();
                spkr.setName(talk.getNameSpeakerDto());
                spkr.setDescription(talk.getDescrpSpeakerDto());
                spkr.setChange(talk.getChargeSpeakerDto());
                spkr = speakRepo.save(spkr);

                srm = new SalonRoom();
                srm.setName(talk.getNameSalonDto());
                srm.setCapacity(talk.getCapSalonDto());
                srm = salonRepo.save(srm);

                tk = new Talk();
                tk.setName(talk.getNameDto());
                tk.setDescription(talk.getDescriptionDto());
                tk.setDuration(talk.getDurationDto());
                tk.setEvent(eve);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }
            if(validarName == null && validarEvent == null && validarSpeaker != null){

                eve = new Event();
                eve.setName(talk.getNameEventDto());
                eve.setDuration(talk.getDurationEventDto());
                eve.setDescription(talk.getDescrpEventDto());
                eve.setTime(talk.getTimeEventDto());
                eve.setDate(talk.getDateEventDto());
                eve.setCapacity(talk.getCapEventDto());
                eve = eventRepo.save(eve);

                spkr = validarSpeaker;

                srm = new SalonRoom();
                srm.setName(talk.getNameSalonDto());
                srm.setCapacity(talk.getCapSalonDto());
                srm = salonRepo.save(srm);

                tk = new Talk();
                tk.setName(talk.getNameDto());
                tk.setDescription(talk.getDescriptionDto());
                tk.setDuration(talk.getDurationDto());
                tk.setEvent(eve);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }
            if(validarName == null && validarEvent != null && validarSpeaker == null){

                eve = validarEvent;

                spkr = new Speaker();
                spkr.setName(talk.getNameSpeakerDto());
                spkr.setDescription(talk.getDescrpSpeakerDto());
                spkr.setChange(talk.getChargeSpeakerDto());
                spkr = speakRepo.save(spkr);

                srm = new SalonRoom();
                srm.setName(talk.getNameSalonDto());
                srm.setCapacity(talk.getCapSalonDto());
                srm = salonRepo.save(srm);

                tk = new Talk();
                tk.setName(talk.getNameDto());
                tk.setDescription(talk.getDescriptionDto());
                tk.setDuration(talk.getDurationDto());
                tk.setEvent(eve);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }
            if(validarName == null && validarEvent != null && validarSpeaker != null){

                eve = validarEvent;

                spkr = validarSpeaker;

                srm = new SalonRoom();
                srm.setName(talk.getNameSalonDto());
                srm.setCapacity(talk.getCapSalonDto());
                srm = salonRepo.save(srm);

                tk = new Talk();
                tk.setName(talk.getNameDto());
                tk.setDescription(talk.getDescriptionDto());
                tk.setDuration(talk.getDurationDto());
                tk.setEvent(eve);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }


        }catch(Exception e){
            e.printStackTrace();
            throw new Exception(Constant.ERROR_SISTEMA);
        }
        return null;
    }

    @Override
    public Boolean deleteTalk(String name) throws Exception {
        return null;
    }
}
