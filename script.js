let userName = "";
let currentSection = "";
let questions = [];
let currentRound = 1;
let currentIndex = 0;
let score = 0;
let answeredQuestions = [];

const questionDB = {
 Legislature: [
   {
    question: "What is the role of the Lok Sabha in law-making?",
    options: ["Approves laws proposed by the President", "Elects the Chief Minister", "Passes bills and controls the budget", "Appoints the Prime Minister"],
    answer: "Passes bills and controls the budget",
    explanation: "The Lok Sabha debates, amends, and passes bills. It also controls public finances and the annual budget."
  },
  {
    question: "What happens if the Rajya Sabha rejects a bill passed by the Lok Sabha?",
    options: ["It is discarded", "A joint sitting is called", "President makes the decision", "Bill automatically passes"],
    answer: "A joint sitting is called",
    explanation: "A joint sitting of both Houses is convened to resolve deadlocks under Article 108."
  },
  {
    question: "Who is the Speaker of the Lok Sabha?",
    options: ["Head of Judiciary", "Presiding officer of Lok Sabha", "Finance Minister", "Chief Whip"],
    answer: "Presiding officer of Lok Sabha",
    explanation: "The Speaker conducts debates, maintains order, and represents the House."
  },
  {
    question: "Which schedule deals with allocation of seats in Rajya Sabha?",
    options: ["First", "Second", "Fourth", "Sixth"],
    answer: "Fourth",
    explanation: "The Fourth Schedule allocates seats to states and UTs in the Rajya Sabha."
  },
  {
    question: "How many members can the President nominate to the Rajya Sabha?",
    options: ["6", "12", "10", "4"],
    answer: "12",
    explanation: "The President can nominate 12 members with special knowledge in literature, science, art, or social service."
  },
  {
    question: "Which house is more powerful in Money Bills?",
    options: ["Lok Sabha", "Rajya Sabha", "Both Equal", "President"],
    answer: "Lok Sabha",
    explanation: "Money Bills can only originate in the Lok Sabha and the Rajya Sabha has only advisory power."
  },
  {
    question: "What is a ‘Whip’ in Parliament?",
    options: ["A law", "A speaker", "Party discipline enforcer", "None"],
    answer: "Party discipline enforcer",
    explanation: "The Whip directs party members to vote in a particular manner in the House."
  },
  {
    question: "What is quorum in Parliament?",
    options: ["Entire House present", "At least 1/3 members", "At least 10% members", "Minimum members needed to conduct business"],
    answer: "Minimum members needed to conduct business",
    explanation: "Quorum is 10% of total members required for valid proceedings."
  },
  {
    question: "Who can dissolve the Lok Sabha?",
    options: ["Speaker", "President", "Prime Minister", "Chief Justice"],
    answer: "President",
    explanation: "On the advice of the Prime Minister and Cabinet, the President can dissolve the Lok Sabha."
  },
  {
    question: "Rajya Sabha is a permanent house. What does that mean?",
    options: ["Never elected", "Members stay for life", "Never fully dissolved", "Cannot be suspended"],
    answer: "Never fully dissolved",
    explanation: "Rajya Sabha is a continuing body with 1/3rd members retiring every 2 years."
  },
  {
    question: "Which Article deals with Parliament?",
    options: ["Article 79", "Article 74", "Article 124", "Article 356"],
    answer: "Article 79",
    explanation: "Article 79 establishes the Parliament of India comprising the President, Lok Sabha, and Rajya Sabha."
  },
  {
    question: "Which language is used in Parliament?",
    options: ["Hindi", "English", "Regional", "Hindi or English"],
    answer: "Hindi or English",
    explanation: "Proceedings are conducted in Hindi or English, as per Article 120."
  },
  {
    question: "What is Zero Hour?",
    options: ["12 PM session", "Question Hour", "Time after Question Hour", "Private Member’s Hour"],
    answer: "Time after Question Hour",
    explanation: "Zero Hour is an informal time used by MPs to raise urgent matters without prior notice."
  },
  {
    question: "Who decides whether a Bill is Money Bill?",
    options: ["President", "Prime Minister", "Speaker", "Finance Minister"],
    answer: "Speaker",
    explanation: "The Speaker’s decision on Money Bills is final under Article 110."
  },
  {
    question: "What is the maximum strength of the Lok Sabha?",
    options: ["500", "545", "552", "560"],
    answer: "552",
    explanation: "According to the Constitution, Lok Sabha can have up to 552 members."
  },
  {
    question: "Who addresses the joint session of Parliament at the beginning of the year?",
    options: ["PM", "President", "Speaker", "Vice-President"],
    answer: "President",
    explanation: "The President addresses both Houses at the start of the first session every year."
  },
  {
    question: "Can Rajya Sabha initiate a Money Bill?",
    options: ["Yes", "No", "Only with PM's consent", "Only with President's consent"],
    answer: "No",
    explanation: "Only the Lok Sabha can introduce Money Bills."
  },
  {
    question: "What is the term of Lok Sabha?",
    options: ["4 years", "6 years", "5 years", "Till dissolved"],
    answer: "5 years",
    explanation: "The Lok Sabha has a normal term of 5 years unless dissolved earlier."
  },
  {
    question: "How are Rajya Sabha members elected?",
    options: ["By people", "By Lok Sabha", "By Legislative Assemblies", "By President"],
    answer: "By Legislative Assemblies",
    explanation: "MLAs of states elect Rajya Sabha members using single transferable vote."
  },
  {
    question: "Who presides over joint sessions of Parliament?",
    options: ["Vice-President", "Speaker", "Prime Minister", "President"],
    answer: "Speaker",
    explanation: "The Speaker of Lok Sabha presides over the joint sitting of both Houses."
  }
],

  Executive: [
     {
    question: "Who is the head of the Indian Executive?",
    options: ["Prime Minister", "President", "Chief Justice", "Governor"],
    answer: "President",
    explanation: "The President is the constitutional head of the executive in India."
  },
  {
    question: "Who is the real executive power holder in India?",
    options: ["Governor", "Chief Minister", "President", "Prime Minister"],
    answer: "Prime Minister",
    explanation: "While the President is the nominal head, actual power lies with the Prime Minister and Council of Ministers."
  },
  {
    question: "How is the President of India elected?",
    options: ["By public vote", "By MPs", "By MLAs", "By an electoral college"],
    answer: "By an electoral college",
    explanation: "The electoral college includes elected MPs and MLAs of states and union territories."
  },
  {
    question: "Who appoints the Prime Minister?",
    options: ["Rajya Sabha", "Lok Sabha", "President", "Chief Justice"],
    answer: "President",
    explanation: "The President appoints the leader of the majority party in Lok Sabha as the Prime Minister."
  },
  {
    question: "How long does the President's term last?",
    options: ["3 years", "6 years", "4 years", "5 years"],
    answer: "5 years",
    explanation: "The President holds office for a term of 5 years under Article 56."
  },
  {
    question: "What is the main duty of the Council of Ministers?",
    options: ["Advising the judiciary", "Advising the President", "Conducting elections", "Making laws"],
    answer: "Advising the President",
    explanation: "As per Article 74, the President acts according to the advice of the Council of Ministers."
  },
  {
    question: "Who is the head of the state executive?",
    options: ["Governor", "Chief Minister", "President", "Speaker"],
    answer: "Governor",
    explanation: "The Governor is the constitutional head of the state, similar to the President at the center."
  },
  {
    question: "What is an ordinance?",
    options: ["A court order", "A government rule", "A temporary law", "A Lok Sabha speech"],
    answer: "A temporary law",
    explanation: "The President can issue ordinances when Parliament is not in session under Article 123."
  },
  {
    question: "What is the role of Vice-President?",
    options: ["Assists PM", "Presides over Lok Sabha", "Acts as President during vacancy", "Heads NITI Aayog"],
    answer: "Acts as President during vacancy",
    explanation: "The Vice-President acts as the President in case of death, resignation, or removal of the President."
  },
  {
    question: "Who is the Supreme Commander of the Armed Forces?",
    options: ["Prime Minister", "Home Minister", "President", "Defense Minister"],
    answer: "President",
    explanation: "Under Article 53, the President is the ceremonial head of the defense forces."
  },
  {
    question: "Can the President reject the advice of the Council of Ministers?",
    options: ["Yes", "No", "Only once", "Depends on PM"],
    answer: "Only once",
    explanation: "The President may ask for reconsideration but must accept the advice after reconsideration."
  },
  {
    question: "Which article deals with the Union Executive?",
    options: ["Article 72", "Article 74", "Article 324", "Article 112"],
    answer: "Article 74",
    explanation: "Article 74 mandates the President to act with the advice of the Council of Ministers."
  },
  {
    question: "Who prepares the Union Budget?",
    options: ["President", "Finance Commission", "Finance Minister", "Prime Minister"],
    answer: "Finance Minister",
    explanation: "The Finance Minister presents the budget in the Parliament on behalf of the executive."
  },
  {
    question: "Who is the Cabinet Secretary?",
    options: ["Leader of Lok Sabha", "Chief of Army", "Top civil servant", "Chief Justice"],
    answer: "Top civil servant",
    explanation: "The Cabinet Secretary is the senior-most civil servant and head of the civil services."
  },
  {
    question: "Which body supervises elections in India?",
    options: ["NITI Aayog", "CAG", "Election Commission", "Supreme Court"],
    answer: "Election Commission",
    explanation: "The Election Commission conducts and regulates elections under Article 324."
  },
  {
    question: "What is the term of a Governor?",
    options: ["3 years", "5 years", "4 years", "Until retirement"],
    answer: "5 years",
    explanation: "A Governor is appointed for 5 years but serves at the pleasure of the President."
  },
  {
    question: "Who appoints the Governors?",
    options: ["PM", "President", "Chief Minister", "Speaker"],
    answer: "President",
    explanation: "The President appoints Governors for states under Article 155."
  },
  {
    question: "What is the function of the Cabinet?",
    options: ["Draft bills", "Approve ordinances", "Formulate government policy", "All of the above"],
    answer: "All of the above",
    explanation: "The Cabinet takes key decisions on administration, policy, and law-making."
  },
  {
    question: "What is meant by ‘collective responsibility’?",
    options: ["All ministers resign if one does", "Ministers are independent", "Only PM is responsible", "President takes decisions alone"],
    answer: "All ministers resign if one does",
    explanation: "The Council of Ministers is collectively responsible to the Lok Sabha."
  },
  {
    question: "What is the National Executive?",
    options: ["Judiciary", "Union Ministers", "President and Vice-President", "PM and Cabinet"],
    answer: "PM and Cabinet",
    explanation: "The National Executive comprises the Prime Minister and his Council of Ministers."
  }
  ],

  Judiciary: [
   {
    question: "Which is the highest judicial authority in India?",
    options: ["High Court", "District Court", "Supreme Court", "Lok Adalat"],
    answer: "Supreme Court",
    explanation: "The Supreme Court is the apex judicial body as per Article 124 of the Constitution."
  },
  {
    question: "Who appoints the Chief Justice of India?",
    options: ["President", "Prime Minister", "Parliament", "Union Cabinet"],
    answer: "President",
    explanation: "The President appoints the Chief Justice based on the recommendation of the collegium."
  },
  {
    question: "What is the retirement age of a Supreme Court judge?",
    options: ["60 years", "62 years", "65 years", "70 years"],
    answer: "65 years",
    explanation: "As per Article 124(2), Supreme Court judges retire at the age of 65."
  },
  {
    question: "Which article guarantees the independence of the judiciary?",
    options: ["Article 32", "Article 50", "Article 22", "Article 356"],
    answer: "Article 50",
    explanation: "Article 50 directs the State to separate the judiciary from the executive."
  },
  {
    question: "What is judicial review?",
    options: ["Law making", "Budget approval", "Review of executive actions", "Judges’ salary review"],
    answer: "Review of executive actions",
    explanation: "Judicial review allows courts to assess laws or executive actions against the Constitution."
  },
  {
    question: "What does Article 32 ensure?",
    options: ["Right to equality", "Right to life", "Right to constitutional remedies", "Freedom of speech"],
    answer: "Right to constitutional remedies",
    explanation: "Article 32 provides the right to approach the Supreme Court to enforce fundamental rights."
  },
  {
    question: "How many judges are in the Supreme Court currently (excluding CJI)?",
    options: ["30", "25", "33", "15"],
    answer: "33",
    explanation: "The sanctioned strength of the Supreme Court is 34 judges, including the Chief Justice."
  },
  {
    question: "Which High Court has jurisdiction over more than one state?",
    options: ["Mumbai HC", "Kolkata HC", "Guwahati HC", "Delhi HC"],
    answer: "Guwahati HC",
    explanation: "The Guwahati High Court serves Arunachal Pradesh, Nagaland, Mizoram, and Assam."
  },
  {
    question: "Which body advises the President on impeachment of judges?",
    options: ["Cabinet", "Rajya Sabha", "Parliament", "Judges Inquiry Committee"],
    answer: "Judges Inquiry Committee",
    explanation: "The committee investigates and submits a report to Parliament for impeachment motion."
  },
  {
    question: "Which court can hear appeals from High Courts?",
    options: ["District Court", "Session Court", "Supreme Court", "None"],
    answer: "Supreme Court",
    explanation: "The Supreme Court has appellate jurisdiction over decisions of High Courts."
  },
  {
    question: "What is the tenure of a High Court judge?",
    options: ["60 years", "62 years", "65 years", "No limit"],
    answer: "62 years",
    explanation: "High Court judges retire at the age of 62 under Article 217."
  },
  {
    question: "Which court deals with constitutional interpretation?",
    options: ["District Court", "Family Court", "Supreme Court", "Consumer Court"],
    answer: "Supreme Court",
    explanation: "The Supreme Court has the final authority to interpret the Constitution."
  },
  {
    question: "What is Public Interest Litigation (PIL)?",
    options: ["A legal complaint", "A political debate", "A media report", "A law by public vote"],
    answer: "A legal complaint",
    explanation: "PIL allows any citizen to approach the court for the protection of public interest."
  },
  {
    question: "Who was the first Chief Justice of India?",
    options: ["Dr. B.R. Ambedkar", "M. Patanjali Sastri", "Harilal Jekisundas Kania", "S. R. Das"],
    answer: "Harilal Jekisundas Kania",
    explanation: "He served as the first Chief Justice from 1950 to 1951."
  },
  {
    question: "Which court is the guardian of the Constitution?",
    options: ["Parliament", "Supreme Court", "Election Commission", "President"],
    answer: "Supreme Court",
    explanation: "The Supreme Court safeguards and upholds the Constitution through its decisions."
  },
  {
    question: "Which article provides for the writ jurisdiction of High Courts?",
    options: ["Article 14", "Article 32", "Article 226", "Article 368"],
    answer: "Article 226",
    explanation: "High Courts can issue writs for enforcement of rights under Article 226."
  },
  {
    question: "Which is the lowest level of the judiciary?",
    options: ["High Court", "Session Court", "District Court", "Gram Nyayalaya"],
    answer: "Gram Nyayalaya",
    explanation: "Gram Nyayalayas are village courts aimed at delivering quick justice in rural areas."
  },
  {
    question: "What is the collegium system?",
    options: ["Election method", "Judicial education board", "System of appointing judges", "Judiciary transfer system"],
    answer: "System of appointing judges",
    explanation: "The collegium system involves senior judges recommending names for judicial appointments."
  },
  {
    question: "Can Parliament remove a judge?",
    options: ["Yes, by simple majority", "Yes, by 2/3 majority", "No", "Only President can"],
    answer: "Yes, by 2/3 majority",
    explanation: "A judge can be removed by impeachment with a two-thirds majority in both Houses of Parliament."
  },
  {
    question: "Who delivers the final verdict in constitutional disputes?",
    options: ["Law Minister", "President", "Supreme Court", "Speaker"],
    answer: "Supreme Court",
    explanation: "The Supreme Court gives final judgments in disputes relating to constitutional interpretation."
  }
  ]
};

document.getElementById("proceed-btn").addEventListener("click", () => {
  userName = document.getElementById("username").value.trim();
  if (userName !== "") {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("section-selection").style.display = "flex";
  }
});

function startSection(section) {
  currentSection = section;
  questions = shuffleArray([...questionDB[section]]);
  currentRound = 1;
  currentIndex = 0;
  score = 0;
  answeredQuestions = [];
  document.getElementById("section-selection").style.display = "none";
  document.getElementById("quiz-section").style.display = "flex";
  showQuestion();
}

function showQuestion() {
  const quizContainer = document.getElementById("quiz-section");
  quizContainer.innerHTML = "";

  if (currentIndex >= 10 && currentRound === 1) {
    currentRound = 2;
    currentIndex = 10;
    questions = shuffleArray(questions.slice(10));
  }

  if (currentIndex >= questions.length) {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("result-container").style.display = "flex";
    document.getElementById("score-display").innerText = `${userName}, your final score is ${score} / 20`;
    return;
  }

  const q = questions[currentIndex];
  const questionEl = document.createElement("h3");
  questionEl.innerText = `Q${currentIndex + 1}: ${q.question}`;
  quizContainer.appendChild(questionEl);

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = option;
    btn.onclick = () => handleAnswer(option, q.answer, q.explanation);
    quizContainer.appendChild(btn);
  });
}

function handleAnswer(selected, correct, explanation) {
  if (selected === correct) {
    score++;
  } else {
    const exp = document.createElement("div");
    exp.className = "explanation";
    exp.innerText = `Wrong! Correct Answer: ${correct}. Explanation: ${explanation}`;
    document.getElementById("quiz-section").appendChild(exp);
  }

  currentIndex++;
  setTimeout(showQuestion, 2500);
}

function goToSectionSelection() {
  document.getElementById("result-container").style.display = "none";
  document.getElementById("section-selection").style.display = "flex";
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
