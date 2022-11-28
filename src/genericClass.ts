class List<T> {
    private data: T[];
    // using rest parameter `...` doesnt need the array input when building instanciate the class.
    // instead just using the reguler input with bunch of value.
    constructor(...elements: T[]) {
        this.data = elements;
    };

    Add(element: T): void {
        this.data.push(element);
    };

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    };

    getAll(): T[] {
        return this.data;
    };
};

// using rest parameter doesnt need the array input.
// deciding that elements in list class should be a number.
let number = new List<number>(1, 2, 3);

// instead if we dont using the rest parameter it would be like this:
// let number = new List<number>([1,2,3]);

// we can make elements in list contain not just the number using the union type.
let random = new List<number | string>(2, "3", "4", 5);
