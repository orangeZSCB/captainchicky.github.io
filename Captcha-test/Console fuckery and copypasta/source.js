!(function a() {
  var n = "%cWelcome to the console fuckery that exists in this page!\n",
    i =
      "%cThis mysterious page contains obfuscated JavaScript code that you (probably) will not be able to decode unless you realize what encoding it is!\n",
    a = "%cThank you for visiting my website! \nhttps://theaviary.me/";

  console.log(
    n + i + a,
    "font-family: sans-serif; color: #f68000; text-transform: uppercase; text-transform: uppercase;",
    "font-family: sans-serif; ",
    "font-family: sans-serif; "
  );
})(window, document);

var icon =
  '                                                            o                               \n                                                           o%                                \n                                                        _ //                                 \n                                                      -=^~\\                                   \n                                                        ~\\\\\\                                  \n                                                          \\\\\\                                 \n                                                           \\\\\\                                \n                                                            );\\                               \n                                                           /|;;\\                              \n                                                      """;;;;;;;\\                             \n                                                ///"""""""";;;;;;\\                            \n                                    ___////+++++""""""""""""";;;@@\\                           \n                      __________///////++++++++++++++""""""""@@@@%)                           \n           ....__/0)///0)//0)//0)/++////////++++++++++"""@@@%%%%%%%%%/                            \n     ..---0)/--------////////////////+++++++/////+++++@@%%%%%%%%%%%%%/                              \n      ..///---0)---0)///0)//0)///0)/////////+++++====@%%%%%%%%%%%/                                 \n   ...0)....//----///------////////////+++++///"     \\/\\\\//                                   \n      //../0)--0)///0)///0)///0)//++++/////          /  \\/                                    \n      --///--------///////////+++/////             _/   /                                     \n.-//..0).-/0)--0)--0)--0)--..                      /\\  /                                      \n       .......--/////////.                            /\\_                                     \n            .0)..0)..                                                                         ';
try {
  console.log(
    "%c" + icon.replace(/_/g, "_"),
    "background-color: black; color: lime; font-family: 'Courier New'; padding-bottom: 10px"
  );
  console.log("\n\n");
  console.log(
    "%cCheck out 'explain()'",
    "background-color: black; color: lime; padding: 5px 50px 5px 20px; font-family: 'Courier New';"
  );
} catch (error) {
  console.log(
    "Somehow, for some reason, what you did caused an error. Stop doing that and reload the page."
  );
}

function explain() {
  try {
    console.log(
      "%cWondering what this page is?",
      "background-color: black; color: cyan; padding: 5px 50px 5px 20px; font-family: 'Courier New'"
    );
    console.log("\n");
    console.log(
      "%cWell, there's a few hidden functions in the code ig. Try to find them and run them :)",
      "background-color: black; color: red; padding: 5px 50px 5px 20px; font-family: 'Courier New'"
    );
    return true;
  } catch (error) {
    console.log(
      "Somehow, for some reason, what you did caused an error. Stop doing that and reload the page."
    );
  }
}

function source() {
  try {
    console.log(
      "%cFinally found the source command? Welp to see the unobfuscated code, visit the file below:",
      "background-color: black; color: magenta; padding: 5px 50px 5px 20px; font-family: 'Courier New'"
    );
    console.log(
      "%c./source.js",
      "padding: 5px 50px 5px 20px; font-family: 'Courier New'"
    );
  } catch (error) {
    console.log(
      "Somehow, for some reason, what you did caused an error. Stop doing that and reload the page."
    );
  }
  return true;
}

function rainbow() {
  const style =
    "font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";
  console.log("%c Rainbowww!", style);
  return true;
}

function funnynumber() {
  let probability = 100 * Math.random(1, 100);
  if (probability >= 0 && probability <= 13) {
    console.log(34);
  } else if (probability >= 14 && probability <= 33) {
    console.log(42);
  } else if (probability >= 34 && probability <= 52) {
    console.log(69);
  } else if (probability >= 53 && probability <= 69) {
    console.log(420);
  } else if (probability >= 70 && probability <= 81) {
    console.log(1337);
  } else if (probability >= 82 && probability <= 93) {
    console.log(8008135);
  } else {
    console.log(80087355);
  }
  return true;
}

function amogus(eval) {
  if (eval == "imposter") {
    let probability = 100 * Math.random();
    if (probability >= 0 && probability <= 50) {
      const style1 =
        "font-size: 25px;color: rbg(255, 0, 188); text-shadow: 3px 3px 0 rgb(255,121,220)";
      console.warn(
        "%cWhilst the impersonator is demonstrating rather skeptical behaviour.",
        style1
      );
    } else {
      const style2 =
        "font-weight: bold; font-size: 50px;color: blue; text-shadow: 6px 6px 0 cyan, 12px 12px 0 yellow, 18px 18px 0 green";
      console.log("%c When the imposter is sus", style2);
    }
  } else if (eval == "crewmate") {
    console.error("%cWarning", `color: red; font-size:30px;`);
    console.warn(
      "%cBe aware of the imposter",
      `color: orange; font-size:16px;`
    );
  } else {
    function trial(Plantiff, Defendant, You) {
      this.Plantiff = Plantiff;
      this.Defendant = Defendant;
      this.You = You;
    }
    const me = new trial(
      "Crewmate",
      "Imposter",
      "You are retarded and cannot think of the two most obvious inputs."
    );
    console.table(me);
  }
  return true;
}

function morbius() {
  console.error("Cease this morbhavior immediately. It is NOT Morbing time.");
  return true;
}

function snek(toggle) {
  var x = document.getElementById("SnekArt");
  if (toggle == "off") {
    x.style.display = "none";
  } else if (toggle == "on") {
    x.style.display = "block";
  } else {
    console.log(
      "%cAre you daft? The parameters for this are 'on' and 'off'. Put them in double quotes when calling the function!",
      "background-color: black; color: yellow; padding: 5px 50px 5px 20px; font-family: 'Courier New'"
    );
    console.log(
      "%cWell, I guess if you've gotten this far, that means you alreayd put the double quotes, so nvm lmao.",
      "background-color: black; color: white; padding: 5px 50px 5px 20px; font-family: 'Courier New'"
    );
  }
  return true;
}