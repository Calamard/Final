package com.example.demo.exception;

public class EdadNoPermitidaException extends Exception {
    private String message;

    public EdadNoPermitidaException(String message){
        super(message);
    }

}
