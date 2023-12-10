const fs = require("fs")
const path = require("path")
var filejson = []
var id = ""
fs.readdirSync(path.join(__dirname, "src")).forEach(filename => {
    var filedata = fs.readFileSync(path.join(__dirname, "src", filename), {encoding:"utf-8"})
    var appendingfile = {}
    appendingfile.filename = filename
    if(filename == "info.json") {
        id = JSON.parse(filedata).id
    }
    appendingfile.type = filename.endsWith(".js") ? "JS" : filename.endsWith(".json") ? "JSON" : filename.endsWith(".css") ? "CSS" : filename.split(".")[filename.split(".").length - 1]
    if(appendingfile.type == "JSON") {
        appendingfile.content = JSON.parse(filedata)
    } else {
        appendingfile.content = filedata
    }
    filejson.push(appendingfile)
})
fs.writeFileSync(path.join(__dirname, id + ".json"), JSON.stringify(filejson, null, 4))