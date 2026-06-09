package com.platmoi.repository;

import com.platmoi.model.CybersecurityExpertise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CybersecurityExpertiseRepository extends JpaRepository<CybersecurityExpertise, Long> {
    List<CybersecurityExpertise> findByCategory(String category);
    List<CybersecurityExpertise> findByFeaturedTrueOrderByLevelDesc();
    List<CybersecurityExpertise> findAllByOrderByLevelDesc();
}
