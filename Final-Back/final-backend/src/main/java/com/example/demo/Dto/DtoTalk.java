package com.example.demo.Dto;

import javax.persistence.Column;
import com.example.demo.Dto.DtoEvent;
public class DtoTalk {
    private String nameDto;
    private String descriptionDto;
    private Integer durationDto;

    private String nameSalonDto;
    private Integer capSalonDto;

    private String namePlaceDto;
    private String cityPlaceDto;
    private String adressPlaceDto;

    private String nameCategoryDto;

    public String getNameDto() {
        return nameDto;
    }

    public void setNameDto(String nameDto) {
        this.nameDto = nameDto;
    }

    public String getDescriptionDto() {
        return descriptionDto;
    }

    public void setDescriptionDto(String descriptionDto) {
        this.descriptionDto = descriptionDto;
    }

    public Integer getDurationDto() {
        return durationDto;
    }

    public void setDurationDto(Integer durationDto) {
        this.durationDto = durationDto;
    }

    public String getNameSalonDto() {
        return nameSalonDto;
    }

    public void setNameSalonDto(String nameSalonDto) {
        this.nameSalonDto = nameSalonDto;
    }

    public Integer getCapSalonDto() {
        return capSalonDto;
    }

    public void setCapSalonDto(Integer capSalonDto) {
        this.capSalonDto = capSalonDto;
    }

    public String getNamePlaceDto() {
        return namePlaceDto;
    }

    public void setNamePlaceDto(String namePlaceDto) {
        this.namePlaceDto = namePlaceDto;
    }

    public String getCityPlaceDto() {
        return cityPlaceDto;
    }

    public void setCityPlaceDto(String cityPlaceDto) {
        this.cityPlaceDto = cityPlaceDto;
    }

    public String getAdressPlaceDto() {
        return adressPlaceDto;
    }

    public void setAdressPlaceDto(String adressPlaceDto) {
        this.adressPlaceDto = adressPlaceDto;
    }

    public String getNameCategoryDto() {
        return nameCategoryDto;
    }

    public void setNameCategoryDto(String nameCategoryDto) {
        this.nameCategoryDto = nameCategoryDto;
    }
}
