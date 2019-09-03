package com.sekhanov.springmailbackend.controller;

import javax.validation.Valid;

import com.sekhanov.springmailbackend.dto.MailMessage;
import com.sekhanov.springmailbackend.service.MailService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("mail")
@CrossOrigin
public class SendMailRestController {

    @Autowired
    private MailService  mailService;

    @PostMapping
    public void sendMail(@RequestBody @Valid MailMessage mailMessage) {
        mailService.sendMail(mailMessage);
    }

}