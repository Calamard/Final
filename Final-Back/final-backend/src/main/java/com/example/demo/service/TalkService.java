package com.example.demo.service;


import com.example.demo.Dto.DtoTalk;
import com.example.demo.model.Talk;
import org.springframework.stereotype.Service;

@Service
public interface TalkService {

    Talk createTalk(DtoTalk talk) throws Exception;

    Boolean deleteTalk(String name) throws Exception;
}
