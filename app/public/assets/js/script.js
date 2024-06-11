function displayApiInfo() {
    var select = document.getElementById("apiSelect");
    var selectedOption = select.options[select.selectedIndex].value;
    var apiInfoDiv = document.getElementById("apiInfo");
    var apiLinkBtn = document.getElementById("apiLinkBtnVisit");
    apiInfoDiv.innerHTML = "";

    switch (selectedOption) {
        // AI
        case "chatgpt":
            apiInfoDiv.innerHTML =
                "<p>API to get responses from ChatGPT for free.</p>" +
                '<p><strong>Headers:</strong><br>EXPERIMENTAL - Optional, for experimental use. Enter "true" to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "gemini":
            apiInfoDiv.innerHTML =
                "<p>API to get responses from Gemini for free.</p>" +
                '<p><strong>Headers:</strong><br>EXPERIMENTAL - Optional, for experimental use. Enter "true" to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "metallama":
            apiInfoDiv.innerHTML =
                "<p>API to get responses from Meta Llama for free.</p>" +
                '<p><strong>Headers:</strong><br>EXPERIMENTAL - Optional, for experimental use. Enter "true" to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "mistral":
            apiInfoDiv.innerHTML =
                "<p>API to get responses from Mistral for free.</p>" +
                '<p><strong>Headers:</strong><br>EXPERIMENTAL - Optional, for experimental use. Enter "true" to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;
        case "blackbox":
            apiInfoDiv.innerHTML =
              "<p>API to get responses from BlackBox AI for free.</p>" +
              '<p><strong>Headers:</strong><br>EXPERIMENTAL - Optional, for experimental use. Enter "true" to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;

        // Fun
        case "simi":
            apiInfoDiv.innerHTML =
                "<p>API to get a response from Simsimi.</p>" +
                "<p><strong>Headers:</strong><br>LANGUAGE - Must, available languages: vi, en, ph, zh, ch, ru, id, ko, ar, fr, jp, de, etc.<br>APIKEY - Optional, if you have the Simsimi API key, you can use it, if you don't have it, it's okay, everything will work normally.</br>EXPERIMENTAL - Optional, for experimental use. Enter \"true\" to use it.</p>";
            apiLinkBtn.disabled = false;
            break;
            
        case "dare":
            apiInfoDiv.innerHTML = "<p>API to get text Dare randomly.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;
            
        case "tebakkata":
          apiInfoDiv.innerHTML =
            "<p>API to get a tebak kata.</p>" +
            "<p><strong>Headers:</strong><br>There isn't any.</p>";
          apiLinkBtn.disabled = false;
          break;
          
        case "susunkata":
          apiInfoDiv.innerHTML =
            "<p>API to get a susun kata.</p>" +
            "<p><strong>Headers:</strong><br>There isn't any.</p>";
          apiLinkBtn.disabled = false;
          break;
         
        case "tebaklirik":
          apiInfoDiv.innerHTML =
           "<p>API to get a tebak lirik.</p>" +
            "<p><strong>Headers:</strong><br>There isn't any.</p>";
         apiLinkBtn.disabled = false;
         break;
          
        // Islamic
        case "hijr":
            apiInfoDiv.innerHTML = "<p>API to get the current Hijri date.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "sholat":
            apiInfoDiv.innerHTML =
                "<p>API to get prayer schedules now.</p>" +
                '<p><strong>Headers:</strong><br>EXPERIMENTAL - Optional, for experimental use. Enter "true" to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>';
            apiLinkBtn.disabled = false;
            break;

        // Random Text
        case "bucin":
            apiInfoDiv.innerHTML = "<p>API to get text Bucin randomly.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "hacker":
            apiInfoDiv.innerHTML = "<p>API to get text Hacker randomly.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "pantun":
            apiInfoDiv.innerHTML = "<p>API to get text Pantun randomly.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "quotes":
            apiInfoDiv.innerHTML = "<p>API to get text Quotes randomly.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;
        case "truth":
            apiInfoDiv.innerHTML = "<p>API to get text Truth randomly.</p>" + "<p><strong>Headers:</strong><br>There isn't any.</p>";
            apiLinkBtn.disabled = false;
            break;

//search

        case "chord":
          apiInfoDiv.innerHTML =
            "<p>API to search chord.</p>" +
            "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
          apiLinkBtn.disabled = false;
          break;

        case "lirik":
          apiInfoDiv.innerHTML =
            "<p>API to search lyrics.</p>" +
            "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
          apiLinkBtn.disabled = false;
          break;

//Stalk
        case "instagram":
          apiInfoDiv.innerHTML =
            "<p>API to stalk Instagram User Data.</p>" +
            "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
          apiLinkBtn.disabled = false;
          break;  
          
        case "youtube":
          apiInfoDiv.innerHTML =
            "<p>API to get a Youtube Channel Info.</p>" +
            "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
          apiLinkBtn.disabled = false;
          break;
          
//other
        case "ip-lookup":
            apiInfoDiv.innerHTML =
              "<p>API to get a IP Data Query.</p>" +
              "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
            apiLinkBtn.disabled = false;
            break;

        case "tempmail":
            apiInfoDiv.innerHTML =
              "<p>API to get a Temporary Mail.</p>" +
              "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
            apiLinkBtn.disabled = false;
            break;
            
        case "tempmail-box":
            apiInfoDiv.innerHTML =
              "<p>API to get a Temporary Mail Inbox.</p>" +
              "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
            apiLinkBtn.disabled = false;
            break;
            
        case "shortlink":
            apiInfoDiv.innerHTML =
              "<p>API to get ShortLink from TinyUrl.</p>" +
              "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
            apiLinkBtn.disabled = false;
            break;
            
        case "ip-lookup":
            apiInfoDiv.innerHTML =
              "<p>API to get a IP Data Query.</p>" +
              "<p><strong>Headers:</strong><br>APIMSG - Optional, to display a custom message<br>EXPERIMENTAL - Optional, for experimental use. Enter true to use it.</br>REGEX - Must if use EXPERIMENTAL, to combine REGEX and messages.</br>ARG1 - Must if using EXPERIMENTAL, to retrieve messages in a capture group to use as argument.</p>";
            apiLinkBtn.disabled = false;
            break;
        // Default
        default:
            apiInfoDiv.innerHTML = "<p>Select an API to see more information.</p>";
            apiLinkBtn.disabled = true;
            break;
    }
}

function visitApi() {
    var select = document.getElementById("apiSelect");
    var selectedOption = select.options[select.selectedIndex].value;

    switch (selectedOption) {
        // AI
        case "chatgpt":
            window.open("api/ai/chatgpt.php", "_blank");
            break;
        case "blackbox":
            window.open("api/ai/blackbox.php", "_blank");
            break;
        case "gemini":
            window.open("api/ai/gemini.php", "_blank");
            break;
        case "metallama":
            window.open("api/ai/metallama.php", "_blank");
            break;
        case "mistral":
            window.open("api/ai/mistral.php", "_blank");
            break;
        case "simi":
            window.open("api/fun/simsimi.php", "_blank");
            break;

  
        // Fun
        case "dare":
            window.open("api/fun/dare.php", "_blank");
            break;
        case "truth":
            window.open("api/fun/truth.php", "_blank");
            break;
        case "susunkata":
            window.open("api/fun/susunkata.php", "_blank");
            break;
        case "tebakkata":
            window.open("api/fun/tebakkata.php", "_blank");
            break;
        case "tebaklirik":
            window.open("api/fun/tebaklirik.php", "_blank");
            break;




        // Search
        case "lirik":
            window.open("api/search/lirik.php", "_blank");
            break;
        case "chord":
            window.open("api/search/chord.php", "_blank");
            break;

        // Islamic
        case "hijr":
            window.open("api/islamic/hijr.php", "_blank");
            break;
        case "sholat":
            window.open("api/islamic/sholat.php", "_blank");
            break;

        // Random Text
        case "bucin":
            window.open("api/random-text/bucin.php", "_blank");
            break;
        case "dare":
            window.open("api/random-text/dare.php", "_blank");
            break;
        case "hacker":
            window.open("api/random-text/hacker.php", "_blank");
            break;
        case "pantun":
            window.open("api/random-text/pantun.php", "_blank");
            break;
        case "quotes":
            window.open("api/random-text/quotes.php", "_blank");
            break;
        case "truth":
            window.open("api/random-text/truth.php", "_blank");
            break;
            
        //Other
        
        case "ip-lookup":
            window.open("api/other/ip-lookup.php", "_blank");
            break;

        case "tempmail":
            window.open("api/other/tempmail.php", "_blank");
            break;

        case "tempmail-inbox":
            window.open("api/other/tempmail-inbox .php", "_blank");
            break;

        case "shortlink":
            window.open("api/other/shortlink.php", "_blank");
            break;
            
        case "youtube":
            window.open("api/stalk/youtube.php", "_blank");
            break;
            
        case "instagram":
            window.open("api/stalk/instagram.php", "_blank");
            break;
            
            
        // Default
        default:
            break;
    }
}

function visitBot(type) {
  let url;

  switch (type) {
    case "gbot":
      url = "https://wa.me/message/MAKNJQWZ5ULVM1";
      break;

      // Default
    default:
      return;
  }

  window.open(url, "_blank");
}

function visitCredits(type) {
    let url;

    switch (type) {
        case "bohr.io": // Bohr IO
            url = "https://bohr.io/";
            break;
        case "joshweb": // DEKU - REST API
            url = "https://joshweb.click/";
            break;
        case "AutoResponderAI_ID": // Komunitas AutoResponder.ai ID
            url = "https://t.me/AutoResponderAI_ID";
            break;
        case "myquran":
            url = "https://bit.ly/API-myQuran-v2"; // API Muslim v2 - by myQuran
            break;
        case "sandipbaruwal": // OtinXSandip API
            url = "https://sandipbaruwal.onrender.com/";
            break;
        case "itsreimaucr":
            url = "https://github.com/ItsReimau/";
            break;

        // Default
        default:
            return;
    }

    window.open(url, "_blank");
}

function visitSocial(type) {
    let url;

    switch (type) {
        case "mywebsite":
            url = "https://anargya.my.id";
            break;
        case "botwebsite":
            url = "https://bot.anargya.my.id";
            break;

        // Default
        default:
            return;
    }

    window.open(url, "_blank");
}