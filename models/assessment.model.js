export function calculateGrade(item) {
    switch (item.kind) {
        case "quiz":
            return Math.round((item.correctAnswers / item.totalQuestions) * 100);
        case "lab":
            return Math.round(item.functionalityScore * 0.7 + item.codeQualityScrore * 0.3);
    }
}
