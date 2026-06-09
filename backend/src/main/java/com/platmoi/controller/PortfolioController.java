package com.platmoi.controller;

import com.platmoi.dto.ContactRequest;
import com.platmoi.dto.PortfolioSummary;
import com.platmoi.model.*;
import com.platmoi.repository.*;
import com.platmoi.service.PortfolioService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:5173", "http://localhost:3000"})
public class PortfolioController {

    private final PortfolioService portfolioService;
    private final ProjectRepository projectRepository;
    private final ExperienceRepository experienceRepository;
    private final EducationRepository educationRepository;
    private final SkillRepository skillRepository;
    private final CybersecurityExpertiseRepository cybersecurityExpertiseRepository;
    private final CybersecurityCertificationRepository cybersecurityCertificationRepository;

    @GetMapping("/portfolio")
    public PortfolioSummary getPortfolio() {
        return portfolioService.getPortfolioSummary();
    }

    @GetMapping("/profile")
    public Profile getProfile() {
        return portfolioService.getProfile();
    }

    @GetMapping("/projects")
    public List<Project> getProjects(@RequestParam(required = false) Boolean featured) {
        if (Boolean.TRUE.equals(featured)) {
            return projectRepository.findByFeaturedTrue();
        }
        return projectRepository.findAll();
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<Project> getProject(@PathVariable Long id) {
        return projectRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/experiences")
    public List<Experience> getExperiences() {
        return experienceRepository.findAllByOrderByStartDateDesc();
    }

    @GetMapping("/educations")
    public List<Education> getEducations() {
        return educationRepository.findAllByOrderByStartDateDesc();
    }

    @GetMapping("/skills")
    public List<Skill> getSkills(@RequestParam(required = false) String category) {
        if (category != null && !category.isBlank()) {
            return skillRepository.findByCategory(category);
        }
        return skillRepository.findAll();
    }

    @GetMapping("/cybersecurity/expertise")
    public List<CybersecurityExpertise> getCybersecurityExpertise(
            @RequestParam(required = false) Boolean featured,
            @RequestParam(required = false) String category) {
        if (Boolean.TRUE.equals(featured)) {
            return cybersecurityExpertiseRepository.findByFeaturedTrueOrderByLevelDesc();
        }
        if (category != null && !category.isBlank()) {
            return cybersecurityExpertiseRepository.findByCategory(category);
        }
        return cybersecurityExpertiseRepository.findAllByOrderByLevelDesc();
    }

    @GetMapping("/cybersecurity/expertise/{id}")
    public ResponseEntity<CybersecurityExpertise> getCybersecurityExpertiseDetail(@PathVariable Long id) {
        return cybersecurityExpertiseRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/cybersecurity/certifications")
    public List<CybersecurityCertification> getCybersecurityCertifications(
            @RequestParam(required = false) Boolean active) {
        if (Boolean.TRUE.equals(active)) {
            return cybersecurityCertificationRepository.findByActiveTrueOrderByIssuedDateDesc();
        }
        return cybersecurityCertificationRepository.findAllByOrderByIssuedDateDesc();
    }

    @GetMapping("/cybersecurity/certifications/{id}")
    public ResponseEntity<CybersecurityCertification> getCybersecurityCertificationDetail(@PathVariable Long id) {
        return cybersecurityCertificationRepository.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> sendContact(@Valid @RequestBody ContactRequest request) {
        portfolioService.saveContactMessage(request);
        return ResponseEntity.status(HttpStatus.CREATED)
                .body(Map.of("message", "Message envoyé avec succès !"));
    }
}
