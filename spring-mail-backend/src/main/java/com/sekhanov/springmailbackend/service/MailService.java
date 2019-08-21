package com.sekhanov.springmailbackend.service;


import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import com.sekhanov.springmailbackend.dto.MailMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

/**
 * MailService
 */
@Service
public class MailService {
    
    @Autowired
    private JavaMailSender javaMailSender;

    public void sendMail(MailMessage mailMessage) {
        MimeMessage message = javaMailSender.createMimeMessage();
        try {
            MimeMessageHelper messageHelper = new MimeMessageHelper(message, true);
            messageHelper.setTo(mailMessage.getToEmail());
            messageHelper.setSubject(mailMessage.getSubject());
            messageHelper.setFrom(mailMessage.getFromEmail());
            messageHelper.setText(mailMessage.getTextMessage(), true);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        javaMailSender.send(message);
    }

    /**
     * 
     * @param mailMessage - массив сообщений 
     * @param timeout
     */
    public void sendMails(List<MailMessage> mailMessages, Integer timeout) {
        for (MailMessage mailMessage : mailMessages) {            
            try {
                sendMail(mailMessage);
                Thread.sleep(timeout);
            } catch (InterruptedException e) {                
                e.printStackTrace();
            }
        }
    } 
}