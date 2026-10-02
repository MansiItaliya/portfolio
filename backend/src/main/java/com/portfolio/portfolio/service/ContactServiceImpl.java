package com.portfolio.portfolio.service;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.portfolio.portfolio.dto.ContactRequest;
import com.portfolio.portfolio.dto.ContactResponse;

import lombok.extern.slf4j.Slf4j;

@Service
@Slf4j
public class ContactServiceImpl implements ContactService {

    @Value("${portfolio.owner.email:owner@example.com}")
    private String ownerEmail;

    @Value("${spring.mail.username:}")
    private String mailUsername;

    private final JavaMailSender mailSender;

    @Autowired
    public ContactServiceImpl(@Autowired(required = false) JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @Override
    public ContactResponse processContactForm(ContactRequest request) {
        log.info("Processing contact form submission from: {} ({})", request.getName(), request.getEmail());

        String emailSubject = "[Portfolio Inquiry] " + request.getSubject();
        String emailBody = String.format(
                "New message received from your Portfolio website:\n\n" +
                        "Name: %s\n" +
                        "Email: %s\n" +
                        "Subject: %s\n\n" +
                        "Message:\n%s\n\n" +
                        "--------------------------------------------------\n" +
                        "Sent via Portfolio Backend API (Java 21 + Spring Boot)",
                request.getName(),
                request.getEmail(),
                request.getSubject(),
                request.getMessage());

        boolean emailSent = false;

        if (mailSender != null && mailUsername != null && !mailUsername.isBlank()) {
            try {
                SimpleMailMessage mailMessage = new SimpleMailMessage();
                mailMessage.setFrom(mailUsername);
                mailMessage.setTo(ownerEmail);
                mailMessage.setReplyTo(request.getEmail());
                mailMessage.setSubject(emailSubject);
                mailMessage.setText(emailBody);

                mailSender.send(mailMessage);
                emailSent = true;
                log.info("Successfully dispatched email notification to portfolio owner: {}", ownerEmail);
            } catch (Exception ex) {
                log.warn("Failed to dispatch real SMTP email: {}. Falling back to system log dispatch.",
                        ex.getMessage());
            }
        } else {
            log.info("SMTP username is not configured. Simulating email dispatch via log.");
        }

        if (!emailSent) {
            log.info(
                    "\n========== PORTFOLIO CONTACT MESSAGE LOG ==========\nTO: {}\nSUBJECT: {}\nBODY:\n{}\n===================================================",
                    ownerEmail, emailSubject, emailBody);
        }

        return new ContactResponse(true,
                "Thank you! Your message has been received successfully. I will get back to you shortly.",
                LocalDateTime.now());
    }
}
