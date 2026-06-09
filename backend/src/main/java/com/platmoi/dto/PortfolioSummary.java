package com.platmoi.dto;

import com.platmoi.model.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PortfolioSummary {
    private Profile profile;
    private List<Project> projects;
    private List<Experience> experiences;
    private List<Education> educations;
    private List<Skill> skills;
    private List<CybersecurityExpertise> cybersecurityExpertise;
    private List<CybersecurityCertification> cybersecurityCertifications;
}
