package com.sekhanov.springmailbackend.dto;

import javax.validation.constraints.NotBlank;

import com.sekhanov.springmailbackend.validation.Emails;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MailMessage {

    @NotBlank(message = "field 'subject' cant be blank")
    private String subject;
    @NotBlank(message = "field 'fromEmail' cant be blank")
    private String fromEmail;
    @Emails
    @NotBlank(message = "field 'toEmail' cant be blank")
    private String toEmailList;
    @NotBlank(message = "field 'textMessage' cant be blank")
    private String textMessage;  
}