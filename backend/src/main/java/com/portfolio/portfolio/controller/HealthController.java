package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public ResponseEntity<ApiResponse<Object>> getHealthStatus() {
        Map<String, Object> healthInfo = Map.of(
            "status", "UP",
            "service", "Java Backend Developer Portfolio API",
            "runtime", "Java 21 / Spring Boot",
            "version", "1.0.0"
        );
        return ResponseEntity.ok(ApiResponse.success("Portfolio backend is operating normally.", healthInfo));
    }
}
