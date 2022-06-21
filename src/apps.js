export function Entry (title) {
  this.title = title;
  this.body = [];
}

Entry.prototype.makeArray = function(entryInput) {
    this.body = entryInput.split(' ');
    console.log(this.body);
}

Entry.prototype.bodyWordCount = function(bodyArray) {
    let count = 0;
    bodyArray.forEach(function(element) {
        if (!Number(element)) {
            count++;
        }  
    });
    return count;
}

// let test = new Entry('testTitle');
// test.makeArray('Hello this is a test');
// test.bodyWordCount(test.body);
// console.log(test);