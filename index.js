// Your code here
class Polygon {
  constructor(array) {
    this.integers = array
  }

  get countSides() {
    return this.integers.length
  }

  get perimeter() {
    let sum = 0;
    for (let n of this.integers) {
      sum += n
    }
    return sum
  }
}

class Triangle extends Polygon {
  get isValid() {
    if (this.integers[0] == this.integers[1] && this.integers[2] == this.integers[0]) {
      return true;
    }
    return false;
  }
}

class Square extends Polygon {
  get area() {
    return this.integers[0] * this.integers[1]
  }

  get  isValid() {
    let nums = this.integers
    if (nums[0] == nums[1] && nums[2] == nums[0] && nums[3] == nums[0]) {
      return true;
    }
    return false;
  }
}
