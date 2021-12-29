$("button#submit").onClick(() => {
    let code = $("textarea#codeInput").val()

    let splitCode = code.split("\n")
    let lookFor = []
    
    for (const line of splitCode) {
      if (line.includes("require")) {
        let splitMore = line.split(" ")
        lookFor.push(splitMore[1])
      }
    }
    splitCode = splitCode.filter(x => !x.includes("exports") && !x.includes("require"))
    
    code = splitCode.join("\n")
    
    for (const word in lookFor) {
      code = code.replace(new RegExp(lookFor[word] + ".","g"),"")
    }

    $("textarea#codeOutput").val(code)

})
$("button#copy").onClick(() => {
    navigator.clipboard.writeText($("textarea#codeOutput").val())
})


