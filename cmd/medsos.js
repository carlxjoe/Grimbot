module.exports = {
  start: async function(ctx) {
    let Davxn = [{ type: "Telegram", value: "https://t.me/davxndev" }, { type: "Instagram", value: "https://www.instagram.com/rizxyux" }]

    let list = [Davxn]

    let str = "Medsos owner\n\nDavxn => "
    if(list.length == 1) {
      let index = 0
      for(let i of list[0]) {
        str += `[${i.type}](${i.value})${index != list[0].length - 1 ? " || " : ""}`
        index += 1
      }
    }

    ctx.replyWithMarkdown(str, { disable_web_page_preview: true })
  },
  tags: "main",
  help: ["medsos"],
  desc: "Menampilkan media sosial owner"
}
