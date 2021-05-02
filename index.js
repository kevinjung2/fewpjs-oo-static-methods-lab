class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const helpers = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let split = this.capitalize(string).split(" ")
    let titled = []
    for (let word of split) {
      if (!helpers.includes(word)) {
        titled.push(this.capitalize(word))
      } else {
        titled.push(word)
      }
    }
    return titled.join(" ")
  }
}
