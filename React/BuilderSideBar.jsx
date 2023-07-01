import React from "react";
import propTypes from "prop-types";
import QuestionTab from "./QuestionTab";
import surveyService from "../../services/surveyService";
import { useEffect } from "react";
import logger from "sabio-debug";
import { useState } from "react";
import toastr from "toastr";

const BuilderSideBar = ({
  currentSurvey,
  currentQuestion,
  setCurrentQuestion,
  isUpdated,
  setIsUpdated,
}) => {
  const _logger = logger.extend("survey");

  const [questions, setQuestions] = useState([]);

  const onFetchSuccess = ({ items }) => {
    _logger("question list", items);
    setQuestions(items);
    setIsUpdated(false);
  };
  const onFetchFailed = (e) => {
    _logger(e);
    toastr.error(e);
  };

  useEffect(() => {
    if (!currentSurvey) return;
    setCurrentQuestion();
    surveyService
      .getSurveyQuestionsById(currentSurvey.id)
      .then(onFetchSuccess)
      .catch(onFetchFailed);
  }, [currentSurvey, isUpdated]);

  const handleDeleteQuestion = (questionId) => {
    // ask user are you sure to delete?
    //fire api call first for delete,
    // onSuccessHandler slice the array => on Lisa, findIndex
    _logger("Deleted", questionId);
    const updatedQuestions = questions.filter(
      (question) => question.id !== questionId
    );
    setQuestions(updatedQuestions);
    onDeleteQuestion(questionId);
  };

  // useEffect(() => {
  //   if (questionId) return;
  //   onDeleteQuestion();
  //   surveyService
  //     .deleteById(question.id)
  //     .then(onDeleteSuccess)
  //     .catch(onDeleteError);
  // }, [currentQuestion, isUpdated]);

  // const onDeleteSuccess = ({ items }) => {
  //   _logger("Deleted list", items);
  //   setQuestions(items);
  //   setIsUpdated(false);
  // };

  // const onDeleteError = (e) => {
  //   _logger("Delete error", e);
  // };

  const mappedQuetions = questions.map((question) => (
    <QuestionTab
      key={question.id}
      question={question}
      setCurrentQuestion={setCurrentQuestion}
      currentQuestion={currentQuestion}
      onDeleteQuestion={handleDeleteQuestion}
    />
  ));

  const styleSroll = {
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    minWidth: "200px",
    height: "580px",
  };

  return (
    <div style={styleSroll}>
      <div>{mappedQuetions}</div>
    </div>
  );
};

BuilderSideBar.propTypes = {
  setCurrentQuestion: propTypes.func.isRequired,
  currentQuestion: propTypes.shape({
    question: propTypes.string,
    helpText: propTypes.string,
    id: propTypes.number,
  }),
  currentSurvey: propTypes.shape({
    id: propTypes.number,
    name: propTypes.string,
    description: propTypes.string,
    surveyStatus: propTypes.shape({ name: propTypes.string }),
    createdBy: propTypes.shape({
      avatarUrl: propTypes.string,
      firstName: propTypes.string,
    }),
    surveyTypes: propTypes.shape({
      name: propTypes.string,
    }),
    dateCreated: propTypes.string,
  }).isRequired,
  isUpdated: propTypes.bool,
  setIsUpdated: propTypes.func,
  onDeleteQuestion: propTypes.func.isRequired,
};

export default BuilderSideBar;
