// Compare two JSON have the same properties without order

const obj1 = {name: "priya",age: 25,};
const obj2 = {age: 25,name: "priya",};

function compareJSON(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return false;
    }
t
    const keys1 = Object.keys(obj1).sort();
    const keys2 = Object.keys(obj2).sort();

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let i = 0; i < keys1.length; i++) {
        if (keys1[i] !== keys2[i]) {
            return false;
        }
    }
    for (let key of keys1) {
        const value1 = obj1[key];
        const value2 = obj2[key];

        if (typeof value1 === 'object' && typeof value2 === 'object') {
          if (!compareJSON(value1, value2)) {
                return false;
            }
        } else {
            if (value1 !== value2) {
                return false;
            }
        }
    }
    return true;
}
console.log(compareJSON(obj1, obj2)); // Output: true
