package com.example.demo.survey;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class SurveyController {

    private final SurveyService surveyService;

    @Autowired
    public SurveyController(SurveyService surveyService) {
        this.surveyService = surveyService;
    }

    @GetMapping("/surveys")
    public List<Survey> findAll() {
        return this.surveyService.findAll();
    }

    @GetMapping("/surveys/{id}")
    public Optional<Survey> find(@PathVariable Long id) {
        return this.surveyService.find(id);
    }

    @PostMapping("/surveys")
    public ResponseEntity<Object> createSurvey(@RequestBody Survey survey) {
        return this.surveyService.addSurvey(survey);
    }

    @DeleteMapping("/survey/{id}")
    public ResponseEntity<Object> deleteSurvey(@PathVariable Long id) {
        return this.surveyService.deleteSurvey(id);
    }
}
