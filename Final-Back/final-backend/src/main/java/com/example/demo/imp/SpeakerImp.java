

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
