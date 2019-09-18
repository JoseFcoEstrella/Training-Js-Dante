function status(name, weight, height) {
  var Joseph = {
    name: name,
    height: height,
    weight: weight,
    sBMI: function() {
      this.bmi = this.weight / (this.height * this.height);
      return this.bmi;
    }
  };
  Joseph.sBMI();
  console.log(Joseph);
}

status("Joseph Joestar", 97, 1.95);
