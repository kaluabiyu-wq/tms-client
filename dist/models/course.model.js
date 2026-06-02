"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(coursestatus) {
    switch (coursestatus.status) {
        case "DRAFT":
            return `DRAFT since ${coursestatus.createdBy}`;
        case "PUBLISHED":
            return `Published by ${coursestatus.publishedAt}`;
        case "ACTIVE":
            return coursestatus.enrolledCount !== undefined
                ? `in progress courses so far :${coursestatus.enrolledCount}`
                : `in progress not yet courses`;
        case "ARCHIVED":
            return `Archived with ${coursestatus.archievedAt}`;
        case "CANCELLED":
            return `Cancelled: ${coursestatus.cancelledAt}`;
        default:
            {
                const _check = coursestatus;
                throw new Error(`Unhandeled status:${JSON.stringify(_check)}`);
            }
            ;
    }
}
