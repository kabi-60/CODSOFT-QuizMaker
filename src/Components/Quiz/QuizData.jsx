export const questions = [
  {
    id: 0,
    question: `Who is the father of C language?`,
    options: [
      { answer: "Dennis Ritchie", isCorrect: true },
      { answer: "Steve Jobs", isCorrect: false },
      { answer: "James Gosling", isCorrect: false },
      { answer: "Rasmus Lerdorf", isCorrect: false },
    ],
  },
  {
    id: 1,
    question: `Which of the following is not a valid C variable name?`,
    options: [
      { answer: "int number", isCorrect: false },
      { answer: "float rate", isCorrect: false },
      { answer: "int $main", isCorrect: true },
      { answer: "int variable_count", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: `Which is a valid C expression?`,
    options: [
      { answer: "int my_num = 100000", isCorrect: true },
      { answer: "int my_num = 100,000;", isCorrect: false },
      { answer: "int my num = 1000", isCorrect: false },
      { answer: "int $my_num = 10000", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: `Which of the following functions is used to find the first occurrence of a string within another string in C?`,
    options: [
      { answer: "strstr()", isCorrect: true },
      { answer: "strchr()", isCorrect: false },
      { answer: "strrchr()", isCorrect: false },
      { answer: "memchr()", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: `Which of the following is used to print an integer in C?`,
    options: [
      { answer: "%d", isCorrect: true },
      { answer: "%c", isCorrect: false },
      { answer: "%s", isCorrect: false },
      { answer: "%f", isCorrect: false },
    ],
  },
  {
    id: 5,
    question: "Which header file is required to use the `printf` function in C?",
    options: [
      { answer: "<stdio.h>", isCorrect: true },
      { answer: "<conio.h>", isCorrect: false },
      { answer: "<stdlib.h>", isCorrect: false },
      { answer: "<math.h>", isCorrect: false },
    ],
  },
  {
    id: 6,
    question: `What is the output of the following code: printf("%d", (5+2)*2);?`,
    options: [
      { answer: "14", isCorrect: true },
      { answer: "10", isCorrect: false },
      { answer: "12", isCorrect: false },
      { answer: "16", isCorrect: false },
    ],
  },
  {
    id: 7,
    question: `Which operator is used to access the value of a variable indirectly in C?`,
    options: [
      { answer: "*", isCorrect: true },
      { answer: "&", isCorrect: false },
      { answer: "^", isCorrect: false },
      { answer: "->", isCorrect: false },
    ],
  },
  {
    id: 8,
    question: `Which function is used to allocate memory dynamically in C?`,
    options: [
      { answer: "malloc()", isCorrect: true },
      { answer: "calloc()", isCorrect: false },
      { answer: "free()", isCorrect: false },
      { answer: "realloc()", isCorrect: false },
    ],
  },
  {
    id: 9,
    question: `Which keyword is used to define a macro in C?`,
    options: [
      { answer: "#define", isCorrect: true },
      { answer: "#macro", isCorrect: false },
      { answer: "#include", isCorrect: false },
      { answer: "#ifdef", isCorrect: false },
    ],
  },
 
];
