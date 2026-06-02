"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeEnrollment = describeEnrollment;
function describeEnrollment(enrollment) {
    switch (enrollment.status) {
        case "PENDING":
            return `Awaiting approval since ${enrollment.requestedAt}`;
        case "APPROVED":
            return `Approved by ${enrollment.approvedBy}`;
        case "ACTIVE":
            return enrollment.currentGrade !== undefined
                ? `in progress grade so far :${enrollment.currentGrade}`
                : `in progress not yet graded`;
        case "COMPELTED":
            return `Finished with ${enrollment.finalGrade}`;
        case "DROPPED":
            return `dropped: ${enrollment.reason}`;
        default: {
            const _check = enrollment;
            throw new Error(`Unhandeled status:${JSON.stringify(_check)}`);
        }
    }
}
