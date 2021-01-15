package com.example.demo.survey;

import com.example.demo.answers.AnswerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    private SurveyRepository surveyRepository;
    private AnswerRepository answerRepository;

    @Autowired
    public SurveyService(SurveyRepository surveyRepository, AnswerRepository answerRepository) {
        this.surveyRepository = surveyRepository;
        this.answerRepository = answerRepository;
    }

    public List<Survey> findAll() {
        return this.surveyRepository.findAll();
    }

    public Optional<Survey> find(Long id) {
        return this.surveyRepository.findById(id);
    }

    public ResponseEntity<Object> addSurvey(Survey survey) {
        Survey newSurvey = this.surveyRepository.save(survey);

        if (this.surveyRepository.findById(newSurvey.getId()).isPresent()) {
            return ResponseEntity.accepted().body("Successfully created");
        } else {
            return ResponseEntity.unprocessableEntity().body("Failed");
        }
    }

    public ResponseEntity<Object> deleteSurvey(Long id) {
        if (this.surveyRepository.findById(id).isEmpty()) {
            return ResponseEntity.unprocessableEntity().body("No record found");
        }

        this.surveyRepository.deleteById(id);

        return ResponseEntity.ok().body("Successfully deleted specified record");
    }
}
