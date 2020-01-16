package com.example.demo.controller;

import com.example.demo.Dto.DtoTalk;
import com.example.demo.imp.TalkImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v2/talk")
public class TalkController {

        @Autowired
        private TalkImp imp;

        @RequestMapping(method = RequestMethod.POST)
        public ResponseEntity<Object> createTalk(@RequestBody DtoTalk dtoTalk) {
            ResponseEntity<Object> rs = null;

            try {
                rs = new ResponseEntity<Object>(imp.createTalk(dtoTalk), HttpStatus.OK);

            } catch (Exception ex) {
                ex.printStackTrace();
                rs = new ResponseEntity<Object>(ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return rs;
        }

}
