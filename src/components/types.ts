interface LanguageTest {
    name: string,
    language: string, // CAN BE A DIFFERENT TYPE
    problems: number,
    answers:LangaugeTestAnswers []
}

interface LangaugeTestAnswers {
    question: LanguageTestQuestion
    answer: LanguageTestAnswer
}

interface LanguageTestQuestion{
    type: LanguageTestQuestion
    
}

