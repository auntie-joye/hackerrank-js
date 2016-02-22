(function() {
  function Scanner(input) {
    this.input = input;
    this.tokens = input.split(/\s/);
    this.pos = -1;
  }
  
  Scanner.prototype.next = function next() {
    return this.tokens[++this.pos];  
  };
  
  Scanner.prototype.nextInt = function nextInt() {
    return Number(this.tokens[++this.pos]);  
  };
}());
