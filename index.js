var katzDeli = [];

var takeANumber = (line,name) => {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) + 1} in line.`
}

var nowServing = (line) => {
  if (line.length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  var lineAnnounce = "The line is currently:"
  if (line.length == 0) {
    return "The line is currently empty."
  } else {
    for (var i = 0; i < line.length; i++) {
      if (i == line.length - 1) {
        lineAnnounce = lineAnnounce + ` ${i+1}. ${line[i]}`;
      } else {
        lineAnnounce = lineAnnounce + ` ${i+1}. ${line[i]},`;
      }
    }
    return lineAnnounce
  }
}
