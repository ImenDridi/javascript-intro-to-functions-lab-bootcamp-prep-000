var answer = "I I love you, Grandma."

describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    return 
  string.toUpperCase()
  })
})

describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    return
    string.toLowerCase()
  })
})

describe('logShout(string)', function() {
  it('calls console.log() its one argument in all caps', function() {
    
    return 
    string.toUpperCase()
  })
})

describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
return 
string.toLowerCase()
  })
})

describe('sayHiToGrandma(string)', function() {
  it('returns "I can\'t hear you!" if `string` is lowercase', function() {
    if(string.toLowerCase() === string){
    return "I can\'t hear you!"}
  })

  it('returns "YES INDEED!" if `string` is uppercase', 
  function() {
    if(string.toUpperCase() === string){
    return "Yes indeed!"}
  })
  
  it('returns "I love you, too." if `string` is "I love you, Grandma."`', 
  
  function() {
  if(answer === true)
  return "I love you, too."
  })
})
