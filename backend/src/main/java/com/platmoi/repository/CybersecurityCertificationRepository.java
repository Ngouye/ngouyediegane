package com.platmoi.repository;

import com.platmoi.model.CybersecurityCertification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CybersecurityCertificationRepository extends JpaRepository<CybersecurityCertification, Long> {
    List<CybersecurityCertification> findByActiveTrueOrderByIssuedDateDesc();
    List<CybersecurityCertification> findAllByOrderByIssuedDateDesc();
}
