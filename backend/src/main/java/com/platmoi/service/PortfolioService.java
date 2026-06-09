package com.platmoi.service;

import com.platmoi.dto.ContactRequest;
import com.platmoi.dto.PortfolioSummary;
import com.platmoi.model.ContactMessage;
import com.platmoi.model.Profile;
import com.platmoi.repository.*;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PortfolioService {

    private final ProfileRepository profileRepository;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final ContactMessageRepository contactMessageRepository;
    private final CybersecurityExpertiseRepository cybersecurityExpertiseRepository;
    private final CybersecurityCertificationRepository cybersecurityCertificationRepository;

    public PortfolioSummary getPortfolioSummary() {
        Profile profile = profileRepository.findAll().stream().findFirst().orElse(null);
        return PortfolioSummary.builder()
                .profile(profile)
                .projects(projectRepository.findAll())
                .experiences(experienceRepository.findAllByOrderByStartDateDesc())
                .educations(educationRepository.findAllByOrderByStartDateDesc())
                .skills(skillRepository.findAll())
                .cybersecurityExpertise(cybersecurityExpertiseRepository.findByFeaturedTrueOrderByLevelDesc())
                .cybersecurityCertifications(cybersecurityCertificationRepository.findByActiveTrueOrderByIssuedDateDesc())
                .build();
    }

    public Profile getProfile() {
        return profileRepository.findAll().stream().findFirst().orElse(null);
    }

    public ContactMessage saveContactMessage(ContactRequest request) {
        ContactMessage message = ContactMessage.builder()
                .name(request.getName())
                .email(request.getEmail())
                .subject(request.getSubject())
                .message(request.getMessage())
                .build();
        return contactMessageRepository.save(message);
    }
}
