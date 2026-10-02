package com.portfolio.portfolio.service;

import com.portfolio.portfolio.dto.ContactRequest;
import com.portfolio.portfolio.dto.ContactResponse;

public interface ContactService {
    ContactResponse processContactForm(ContactRequest request);
}
