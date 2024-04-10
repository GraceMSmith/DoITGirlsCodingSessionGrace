const startButton = document.getElementById('start-btn')

const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')

const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

nextButton.addEventListener('click', () => {

  currentQuestionIndex++

  setNextQuestion()

})

function startGame() {

  startButton.classList.add('hide')

  shuffledQuestions = questions.sort(() => Math.random() - .5)

  currentQuestionIndex = 0

  questionContainerElement.classList.remove('hide')

  setNextQuestion()

}

function setNextQuestion() {

  resetState()

  showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

  questionElement.innerText = question.question

  question.answers.forEach(answer => {

    const button = document.createElement('button')

    button.innerText = answer.text

    button.classList.add('btn')

    if (answer.correct) {

      button.dataset.correct = answer.correct

    }

    button.addEventListener('click', selectAnswer)

    answerButtonsElement.appendChild(button)

  })

}

function resetState() {

  clearStatusClass(document.body)

  nextButton.classList.add('hide')

  while (answerButtonsElement.firstChild) {

    answerButtonsElement.removeChild(answerButtonsElement.firstChild)

  }

}

function selectAnswer(e) {

  const selectedButton = e.target

  const correct = selectedButton.dataset.correct

  setStatusClass(document.body, correct)

  Array.from(answerButtonsElement.children).forEach(button => {

    setStatusClass(button, button.dataset.correct)

  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {

    nextButton.classList.remove('hide')

  } else {

    startButton.innerText = 'Restart'

    startButton.classList.remove('hide')

  }

}

function setStatusClass(element, correct) {

  clearStatusClass(element)

  if (correct) {

    element.classList.add('correct')

  } else {

    element.classList.add('wrong')

  }

}

function clearStatusClass(element) {

  element.classList.remove('correct')

  element.classList.remove('wrong')

}

const questions = [

  {

    question: 'Whos my fav teacher?',

    answers: [

      { text: 'Miss Lynch', correct: false },

      { text: 'Mr Kirsop', correct: true }

    ]

  },

  {

    question: 'where have I been?',

    answers: [

      { text: 'Finland', correct: false },

      { text: 'New Zeland', correct: false },

      { text: 'Amsterdam', correct: true },

      { text: 'Somewhere in the U.S', correct: true }

    ]

  },

  {

    question: 'who WAS my favroiut band/singer?',

    answers: [

      { text: 'WeThree', correct: false },

      { text: 'Taylor Swift', correct: false },

      { text: 'Lovejoy', correct: true },

      { text: 'Pink', correct: false }

    ]

  },

  {

    question: 'How old was I when I had my first surgery?',

    answers: [

      { text: '2', correct: false },

      { text: '10', correct: false },

      { text : '5', correct: true},

      { text : 'New Born', correct: false }

    ]

},]
{

  question: 'what is my biggest fear?',

  answers [

    { text: 'hights', correct: false },

    { text: 'spiders', correct: false },

    { text : 'being forgoten', correct: true},

    { text : 'deep bodies of water', correct: false }

  ]}
  {

    question: 'what is my biggest fear?',
  
    answers [
  
      { text: 'hights', correct: false },
  
      { text: 'spiders', correct: false },
  
      { text : 'being forgoten', correct: true},
  
      { text : 'deep bodies of water', correct: false }
  
    ]}{

      question: 'who has been my friend the longest',
    
      answers [
    
        { text: 'Paige', correct: false },
    
        { text: 'Hannah', correct: true },
    
        { text : 'Ace', correct: false},
    
        { text : 'Amber', correct: false }
    
      ]}{

        question: 'what pisses me off the most?',
      
        answers [
      
          { text: 'people calling me toxic', correct: true },
      
          { text: 'Liers', correct: true },
      
          { text : 'people fighting over stupid things', correct: true},
      
          { text : 'all of the above', correct: true }
      
        ]}{

          question: 'how old was I when i found out santa and that wernt real?',
        
          answers [
        
            { text: 'year 7', correct: false },
        
            { text: 'year 5', correct: false },
        
            { text : 'year 2', correct: false},
        
            { text : 'year 4', correct: true }
        
          ]}{

            question: 'how did i Figure out santa and thar wernt real?',
          
            answers [
          
              { text: 'I just figured it out', correct: false },
          
              { text: 'my friends told me', correct: true },
          
              { text : 'Wait there not real?', correct: false},
          
              { text : 'Eh IDK', correct: false }
          
            ]}{

              question: ' what am I ',
            
              answers [
            
                { text: 'eshay', correct: false },
            
                { text: '???', correct: false },
            
                { text : ' unicorn', correct: false},
            
                { text : 'GAY', correct: true }
            
              ]}{

                question: 'what meds do I take?',
              
                answers [
              
                  { text: 'zoloft', correct: false },
              
                  { text: 'anti depressents', correct: true },
              
                  { text : 'Panadol', correct: true},
              
                  { text : 'all of the above', correct: false }
              
                ]}{

                  question: 'what sport did I do first?',
          
                
                  answers [
                
                    { text: 'hockey', correct: false },
                
                    { text: 'Gymnastics', correct: false },
                
                    { text : 'AFL', correct: false},
                
                    { text : 'Boxing', correct: false }
                
                  ]}
  