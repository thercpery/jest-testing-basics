const functions = require("./functions");

// before and after each test case
// beforeEach(() => initDatabase())
// afterEach(() => closeDatabase())

// before and after the entire test suite
// beforeAll(() => initDatabase())
// afterAll(() => closeDatabase())

// const initDatabase = () => console.log("Database initialized...")
// const closeDatabase = () => console.log("Database closed...")

const nameCheck = () => console.log("Checking name")

describe("Checking Names", () => {
    beforeEach(() => nameCheck());
    test("User is Jeff", () => {
        const user = "Jeff"
        expect(user).toBe("Jeff")
    })

    test("User is Carol", () => {
        const user = "Carol"
        expect(user).toBe("Carol")
    })
});

test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});


/* 
    CHECK FOR TRUTHY & FALSY VALUES
    toBeNull matches only null
    toBeUndefined matches only undefined
    toBeDefined is the opposite of toBeUndefined
    toBeTruthy matches anything that an if statement treats as true
    toBeFalsy matches anything that an if statement treats as false
*/

// toBeNull
test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test("Should be falsy", () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toBeTruthy
test("Should be truthy", () => {
    expect(functions.checkValue(true)).toBeTruthy();
});

// toEqual
test("User should be RC Pery object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "RC",
        lastName: "Pery"
    });
});

// Less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
test("There is no I in team" , () => {
    expect("team").not.toMatch(/I/i);
});

// Arrays
test("Admin should be in usernames", () => {
    usernames = ["john", "alice", "admin"];
    expect(usernames).toContain("admin");
});

// Working with async data

// Promise
test("User fetched name should be Leanne Graham", () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual("Leanne Graham")
    })
});

// Async/await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser()
    expect(data.name).toEqual("Leanne Graham")
});