const path = require("path")

// console.log(path.join(__dirname, "store.json"))
// console.log("--")

// console.log(path.resolve(__dirname, "store.json"))
// console.log("--")

// console.log(path.join(process.cwd(), "store.json"))
// console.log("--")

// console.log(path.resolve(process.cwd(), "store.json"))
// console.log("--")

// console.log(path.join(process.cwd(), "foo", "/store.json"))
// console.log("--")

// console.log(path.resolve(process.cwd(), "foo", "/store.json"))
// console.log("--")

fs.writeFileSync("store.json", JSON.stringify(data))
fs.writeFileSync("store.json", JSON.stringify(Object.assign({}, data, { foo: "bar" })))
