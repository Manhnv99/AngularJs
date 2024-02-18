window.TestQuizController = function (
  $scope,
  $http,
  $location,
  $routeParams,
  $interval
) {
  const apiQuestion = "http://localhost:3000/" + $routeParams.id;
  $scope.currentQuestion = 0;
  $scope.inputQuestion = "";
  $scope.listAnswers = [];
  $scope.doneTest = true;

  const fetchQuestions = async () => {
    const response = await $http.get(apiQuestion);
    return response.data.slice(0, 10); // Get only the first 10 questions
  };

  $scope.QuestionShow = (index) => {
    return ($scope.questionShow = $scope.listQuestion[index]);
  };

  const init = async () => {
    try {
      $scope.listQuestion = await fetchQuestions();
      $scope.QuestionShow($scope.currentQuestion);
      $scope.$apply();
    } catch (error) {
      console.error(error);
    }
  };

  init();

  $scope.handlePreQuestion = () => {
    if ($scope.currentQuestion === 0) {
      $scope.currentQuestion = 9;
      $scope.QuestionShow($scope.currentQuestion);
      $scope.handleInputQuestion();
    } else {
      $scope.currentQuestion -= 1;
      $scope.QuestionShow($scope.currentQuestion);
      $scope.handleInputQuestion();
    }
  };

  $scope.handleNextQuestion = () => {
    if ($scope.currentQuestion === 9) {
      $scope.currentQuestion = 0;
      $scope.QuestionShow($scope.currentQuestion);
      $scope.handleInputQuestion();
    } else {
      $scope.currentQuestion += 1;
      $scope.QuestionShow($scope.currentQuestion);
      $scope.handleInputQuestion();
    }
  };

  //   choose Question
  $scope.onClickQues1 = (currentQuestion, correctAnswer, userAnswer) => {
    if ($scope.listAnswers.length !== 0) {
      let differenceAnswer = 0;
      $scope.listAnswers.forEach((element, index) => {
        if (element.currentQuestion === currentQuestion) {
          differenceAnswer = 1;
          if (element.userAnswer !== userAnswer) {
            $scope.listAnswers.splice(index, 1, {
              currentQuestion: currentQuestion,
              correctAnswer: correctAnswer,
              userAnswer: userAnswer,
              inputAnswer: "quest1",
            });
          }
        }
      });
      if (differenceAnswer === 0) {
        $scope.listAnswers.push({
          currentQuestion: currentQuestion,
          correctAnswer: correctAnswer,
          userAnswer: userAnswer,
          inputAnswer: "quest1",
        });
      }
    } else {
      $scope.listAnswers.push({
        currentQuestion: currentQuestion,
        correctAnswer: correctAnswer,
        userAnswer: userAnswer,
        inputAnswer: "quest1",
      });
    }
    $scope.doneTest();
  };
  $scope.onClickQues2 = (currentQuestion, correctAnswer, userAnswer) => {
    if ($scope.listAnswers.length !== 0) {
      let differenceAnswer = 0;
      $scope.listAnswers.forEach((element, index) => {
        if (element.currentQuestion === currentQuestion) {
          differenceAnswer = 1;
          if (element.userAnswer !== userAnswer) {
            $scope.listAnswers.splice(index, 1, {
              currentQuestion: currentQuestion,
              correctAnswer: correctAnswer,
              userAnswer: userAnswer,
              inputAnswer: "quest2",
            });
          }
        }
      });
      if (differenceAnswer === 0) {
        $scope.listAnswers.push({
          currentQuestion: currentQuestion,
          correctAnswer: correctAnswer,
          userAnswer: userAnswer,
          inputAnswer: "quest2",
        });
      }
    } else {
      $scope.listAnswers.push({
        currentQuestion: currentQuestion,
        correctAnswer: correctAnswer,
        userAnswer: userAnswer,
        inputAnswer: "quest2",
      });
    }
    $scope.doneTest();
  };
  $scope.onClickQues3 = (currentQuestion, correctAnswer, userAnswer) => {
    if ($scope.listAnswers.length !== 0) {
      let differenceAnswer = 0;
      $scope.listAnswers.forEach((element, index) => {
        if (element.currentQuestion === currentQuestion) {
          differenceAnswer = 1;
          if (element.userAnswer !== userAnswer) {
            $scope.listAnswers.splice(index, 1, {
              currentQuestion: currentQuestion,
              correctAnswer: correctAnswer,
              userAnswer: userAnswer,
              inputAnswer: "quest3",
            });
          }
        }
      });
      if (differenceAnswer === 0) {
        $scope.listAnswers.push({
          currentQuestion: currentQuestion,
          correctAnswer: correctAnswer,
          userAnswer: userAnswer,
          inputAnswer: "quest3",
        });
      }
    } else {
      $scope.listAnswers.push({
        currentQuestion: currentQuestion,
        correctAnswer: correctAnswer,
        userAnswer: userAnswer,
        inputAnswer: "quest3",
      });
    }
    $scope.doneTest();
  };
  $scope.onClickQues4 = (currentQuestion, correctAnswer, userAnswer) => {
    if ($scope.listAnswers.length !== 0) {
      let differenceAnswer = 0;
      $scope.listAnswers.forEach((element, index) => {
        if (element.currentQuestion === currentQuestion) {
          differenceAnswer = 1;
          if (element.userAnswer !== userAnswer) {
            $scope.listAnswers.splice(index, 1, {
              currentQuestion: currentQuestion,
              correctAnswer: correctAnswer,
              userAnswer: userAnswer,
              inputAnswer: "quest4",
            });
          }
        }
      });
      if (differenceAnswer === 0) {
        $scope.listAnswers.push({
          currentQuestion: currentQuestion,
          correctAnswer: correctAnswer,
          userAnswer: userAnswer,
          inputAnswer: "quest4",
        });
      }
    } else {
      $scope.listAnswers.push({
        currentQuestion: currentQuestion,
        correctAnswer: correctAnswer,
        userAnswer: userAnswer,
        inputAnswer: "quest4",
      });
    }
    $scope.doneTest();
  };

  $scope.handleShowQ = () => {
    console.log($scope.listAnswers);
    $scope.handleInputQuestion();
  };

  $scope.handleInputQuestion = () => {
    let count = 0;
    $scope.listAnswers.forEach((element) => {
      if (element.currentQuestion === $scope.currentQuestion) {
        count = 1;
        $scope.inputQuestion = element.inputAnswer;
      }
    });
    if (count === 0) {
      $scope.inputQuestion = "";
    }
  };

  $scope.doneTest = () => {
    if ($scope.listAnswers.length === 10) {
      $scope.doneTest = false;
    }
  };

  $scope.handleDoneTest = () => {
    let score = 0;
    $scope.listAnswers.forEach((element) => {
      if (element.correctAnswer === element.userAnswer) {
        score++;
      }
    });
    alert("Bạn Được " + score + "Điểm");
    $location.path("/home");
  };

  $scope.hours = 5; // Giờ bắt đầu
  $scope.minutes = 0; // Phút bắt đầu

  var interval = $interval(function () {
    if ($scope.minutes > 0) {
      $scope.minutes--;
    } else if ($scope.hours > 0) {
      $scope.hours--;
      $scope.minutes = 59;
    } else {
      $interval.cancel(interval); // Dừng bộ đếm thời gian
      let score = 0;
      $scope.listAnswers.forEach((element) => {
        if (element.correctAnswer === element.userAnswer) {
          score++;
        }
      });
      alert("Đã hết thời gian làm bài điểm của bạn là: " + score);
      $location.path("/home");
    }
  }, 1000); // Cập nhật mỗi giây
};
