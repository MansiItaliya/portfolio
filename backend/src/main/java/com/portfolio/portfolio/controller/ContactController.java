package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.ContactRequest;
import com.portfolio.portfolio.dto.ContactResponse;
import com.portfolio.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private static final Logger logger = LoggerFactory.getLogger(ContactController.class);
    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> submitContactForm(@Valid @RequestBody ContactRequest request) {
        logger.info("Received POST /api/contact request from email: {}", request.getEmail());
        ContactResponse response = contactService.processContactForm(request);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
