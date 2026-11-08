const multiplyValue = (value: number, multiplier: number = 2): number => {
    return value * multiplier;
};

const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.toLowerCase().trim();
    }
    if (typeof value === "number") {
        return value * 10;
    }
    return value ? "Active" : "Inactive";
};

const formatCoordinate = ([latitude, longitude, locationName]: readonly [
    number,
    number,
    string,
]): string => {
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = [];
    arrays.forEach((array: T[]): void => {
        result.push(...array);
    });
    return result;
};

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (
    courses: Course[],
    minStudents: number,
): Course[] => {
    return courses.filter(
        (course: Course): boolean =>
            course.isPublished && course.students >= minStudents,
    );
};

const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map((item: T): T[K] => item[key]);
};

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number,
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string,
    ) {
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const validateAgeAsync = async (age: number): Promise<string> => {
    if (age < 18) {
        throw new Error("Access Denied: Must be 18 or older");
    }
    return new Promise<string>((resolve: (value: string) => void): void => {
        setTimeout((): void => {
            resolve("Access Granted");
        }, 1000);
    });
};
