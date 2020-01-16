package com.example.demo.imp;

import com.example.demo.Dto.DtoTalk;
import com.example.demo.model.Category;
import com.example.demo.model.SalonRoom;
import com.example.demo.model.Speaker;
import com.example.demo.model.Talk;
import com.example.demo.repository.*;
import com.example.demo.service.TalkService;
import com.example.demo.util.Constant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TalkImp implements TalkService {
    @Autowired
    private TalkRepository talkRepo;
    @Autowired
    private CategoryRepository catRepo;
    @Autowired
    private SpeakRepository speakRepo;
    @Autowired
    private SalonRoomRepository salonRepo;

    @Override
    public Talk createTalk(DtoTalk talk) throws Exception {
        Talk tk = null;
        Category cat = null;
        Speaker spkr = null;
        SalonRoom srm = null;
        try{
            Talk validateName = talkRepo.finByname(talk.getNameDto());
            Category validateCategory = catRepo.findByCat(talk.getNameCategoryDto());
            Speaker validateSpeaker = speakRepo.findByname(talk.getNameSpeakerDto());
            SalonRoom validateSaloon = salonRepo.findByName(talk.getNameSalonDto());
            if(validateName == null && validateCategory == null && validateSpeaker == null){

                cat = new Category();
                cat.setName(talk.getNameCategoryDto());


                spkr = new Speaker();
                spkr.setName(talk.getNameSpeakerDto());
                spkr.setDescription(talk.getDescripSpeakerDto());
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
                tk.setCategory(cat);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }
            if(validateName == null && validateCategory == null && validateSpeaker != null){

                cat = new Category();
                cat.setName(talk.getNameCategoryDto());

                spkr = validateSpeaker;

                srm = new SalonRoom();
                srm.setName(talk.getNameSalonDto());
                srm.setCapacity(talk.getCapSalonDto());
                srm = salonRepo.save(srm);

                tk = new Talk();
                tk.setName(talk.getNameDto());
                tk.setDescription(talk.getDescriptionDto());
                tk.setDuration(talk.getDurationDto());
                tk.setCategory(cat);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }
            if(validateName == null && validateCategory != null && validateSpeaker == null){

                cat = new Category();
                cat.setName(talk.getNameCategoryDto());

                spkr = new Speaker();
                spkr.setName(talk.getNameSpeakerDto());
                spkr.setDescription(talk.getDescripSpeakerDto());
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
                tk.setCategory(cat);
                tk.setSpeakers(spkr);
                tk.setSalon(srm);
                tk = talkRepo.save(tk);

            }
            if(validateName == null && validateCategory != null && validateSpeaker != null){

                cat = validateCategory;

                spkr = validateSpeaker;

                srm = new SalonRoom();
                srm.setName(talk.getNameSalonDto());
                srm.setCapacity(talk.getCapSalonDto());
                srm = salonRepo.save(srm);

                tk = new Talk();
                tk.setName(talk.getNameDto());
                tk.setDescription(talk.getDescriptionDto());
                tk.setDuration(talk.getDurationDto());
                tk.setCategory(cat);
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
