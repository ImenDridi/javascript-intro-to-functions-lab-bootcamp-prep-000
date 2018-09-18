
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
    if(string.toLowerCase() === lowercase)
    return "I can\'t hear you!"
  })

  it('returns "YES INDEED!" if `string` is uppercase', function() {
    expect(sayHiToGrandma('HELLO')).toEqual("YES INDEED!")
  })

  it('returns "I love you, too." if `string` is "I love you, Grandma."`', function() {
    expect(sayHiToGrandma("I love you, Grandma.")).toEqual("I love you, too.")
  })
})
