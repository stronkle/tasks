let numbers = [5, 8, 0, 1, 9, 11, 15, 16];
console.log("Original numbers list: ", numbers);

// ASC Sort
function ascSort() {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] < numbers[j]) {
        //swap
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  console.log("numbers list After sorting: ", numbers);
}
ascSort();

// DESC Sort

function descSort() {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        //swap
        let temp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = temp;
      }
    }
  }

  console.log("numbers list After Desc sorting: ", numbers);
}
descSort();

// read local file
function readAndLoadTxt() {
  let fs = require("fs");

  //to read the file an make an erorr handler
  fs.readFile("data.txt", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    //sorting the data from external file and convert it into a string.
    data = data.sort().toString();

    console.log(data);

    // to write new file that contain our sorted data
    fs.writeFile("output.txt", data, function (err) {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
}

//execute function
readAndLoadTxt();
