package com.sekhanov.springmailbackend.service;

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
        String[] toEmails = mailMessage.getToEmailList().split("\\n");
        MimeMessage message = javaMailSender.createMimeMessage();
        MimeMessageHelper messageHelper = null;
        try {
            messageHelper = new MimeMessageHelper(message, true);
            messageHelper.setSubject(mailMessage.getSubject());
            messageHelper.setText(mailMessage.getTextMessage(), true);
            for (String s : toEmails) {
                messageHelper.setTo(s);
                javaMailSender.send(message);
                Thread.sleep(5000);
            }
        } catch (MessagingException | InterruptedException e1) {
            e1.printStackTrace();
        }

        
    }

}