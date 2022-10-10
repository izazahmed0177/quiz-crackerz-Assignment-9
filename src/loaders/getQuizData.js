export const quizData = async () => {
    const quizDataAll = await fetch('https://openapi.programming-hero.com/api/quiz');
    return quizDataAll;
}