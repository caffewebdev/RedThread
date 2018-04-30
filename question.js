function Question(text, choices, values, maximum, area, max) {
    this.text = text;
    this.choices = choices;
    this.choiceValue = values;
    this.maximum = maximum;
    this.area = area;
    this.max = max;

    switch(this.area) {
    case 'context':
        maximumContextScore += this.maximum;
       // console.log(maximumContextScore);
        break;
    case 'beliefs':
        maximumBeliefsScore += this.maximum;
        //console.log(this.maximum);
        break;
    case 'role':
        maximumRoleScore += this.maximum;
        //console.log(this.maximum);
        break;
    case 'behaviours':
        maximumBehavioursScore += this.maximum;
        //console.log(this.maximum);
        break;
    case 'culture':
        maximumCultureScore += this.maximum;
        //console.log(this.maximum);
        break;
    case 'purpose':
        maximumPurposeScore += this.maximum;
        //console.log(this.maximum);
        break;
    case 'resources':
        maximumResourcesScore += this.maximum;
        //console.log(this.maximum);
        break;
    }
}

Question.prototype.getValue = function(choice) {
    return this.choiceValue[this.choices.indexOf(choice)];
}

Question.prototype.questionArea = function() {
    return this.area;
}


