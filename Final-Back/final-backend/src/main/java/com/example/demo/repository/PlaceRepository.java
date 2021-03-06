package com.example.demo.repository;

import com.example.demo.model.Place;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaceRepository extends JpaRepository<Place,Long> {
   Place findByid(Long id);
   Place findByName(String namePlaceDto);
}
/*
Giovanna Tapia
giovannatss27@gmail.com
 */