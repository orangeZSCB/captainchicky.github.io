//1 function for sequencing selection and iteration
//purpose = find the length of the name
//paramteter "name" the name the user wants to input
var rawDNA = "";
onEvent("button1", "click", function( ) {
  rawDNA = getText("text_input1");
  console.log(convertraw(rawDNA));
  console.log(DNAparser(DNAinput));
  console.log(mRNAjoiner(mRNAoutput));
  console.log(mRNAconverter(mRNAinput));
});


//function 0
//var rawDNA = 'tacgactgggtcatcgtacgctgggggatc';
var DNAinput = [];
function convertraw(rawDNA){
  for (var i = 0; i < rawDNA.length; i++) {
  var temp2 = rawDNA[i].toUpperCase();
  appendItem(DNAinput, temp2);
  }
  return DNAinput;
}
//console.log(convertraw(rawDNA));


//function 1

var mRNAoutput = [];
function DNAparser(DNAinput) {
  for (var i = 0; i < DNAinput.length; i++) {
    if (DNAinput[i] == "T") {
      appendItem(mRNAoutput, "A");
    }
    else if (DNAinput[i] == "A") {
      appendItem(mRNAoutput, "U");
    } 
    else if (DNAinput[i] == "C") {
      appendItem(mRNAoutput, "G");
    }
    else if (DNAinput[i] == "G") {
      appendItem(mRNAoutput, "C");
    }
  }
  return mRNAoutput;
}
//console.log(DNAparser(DNAinput));

//function 2
var mRNAinput = [];
function mRNAjoiner(mRNAoutput){
  for (var i = 0; i < mRNAoutput.length-2; i+=3) {
    var temp = mRNAoutput[i] + mRNAoutput[i+1] + mRNAoutput[i+2];
    appendItem(mRNAinput, temp);
  }
  return mRNAinput;
}
//console.log(mRNAjoiner(mRNAoutput));

//function 3
var AAoutput = [];
function mRNAconverter(mRNAinput) {
  for (var i = 0; i < mRNAinput.length; i++) {
    if (mRNAinput[i] == "UUU" || mRNAinput[i] == "UUC") {
      appendItem(AAoutput, "Phe");
    }
    else if (mRNAinput[i] == "UUA" || mRNAinput[i] == "UUG" || mRNAinput[i] == "CUU" || mRNAinput[i] == "CUC" || mRNAinput[i] == "CUA" || mRNAinput[i] == "CUG") {
      appendItem(AAoutput, "Leu");
    } 
    else if (mRNAinput[i] == "AUU" || mRNAinput[i] == "AUC" || mRNAinput[i] == "AUA") {
      appendItem(AAoutput, "Ile");
    }
    else if (mRNAinput[i] == "AUG") {
      appendItem(AAoutput, "Met");
    }
    else if (mRNAinput[i] == "GUU" || mRNAinput[i] == "GUC" || mRNAinput[i] == "GUA" || mRNAinput[i] == "GUG") {
      appendItem(AAoutput, "Val");
    }
    else if (mRNAinput[i] == "UCU" || mRNAinput[i] == "UCC" || mRNAinput[i] == "UCA" || mRNAinput[i] == "UCG" || mRNAinput[i] == "AGU" || mRNAinput[i] == "AGC") {
      appendItem(AAoutput, "Ser");
    }
    else if (mRNAinput[i] == "CCU" || mRNAinput[i] == "CCC" || mRNAinput[i] == "CCA" || mRNAinput[i] == "CCG") {
      appendItem(AAoutput, "Pro");
    }
    else if (mRNAinput[i] == "ACU" || mRNAinput[i] == "ACC" || mRNAinput[i] == "ACA" || mRNAinput[i] == "ACG") {
      appendItem(AAoutput, "Thr");
    }
    else if (mRNAinput[i] == "GCU" || mRNAinput[i] == "GCC" || mRNAinput[i] == "GCA" || mRNAinput[i] == "GCG") {
      appendItem(AAoutput, "Ala");
    }
    else if (mRNAinput[i] == "UAU" || mRNAinput[i] == "UAC") {
      appendItem(AAoutput, "Tyr");
    }
    else if (mRNAinput[i] == "CAU" || mRNAinput[i] == "CAC") {
      appendItem(AAoutput, "His");
    }
    else if (mRNAinput[i] == "CAA" || mRNAinput[i] == "CAG") {
      appendItem(AAoutput, "Gln"); 
    }
    else if (mRNAinput[i] == "AAU" || mRNAinput[i] == "AAC") {
      appendItem(AAoutput, "Asn"); 
    }
    else if (mRNAinput[i] == "AAA" || mRNAinput[i] == "AAG") {
      appendItem(AAoutput, "Lys");
    }
    else if (mRNAinput[i] == "GAU" || mRNAinput[i] == "GAC") {
      appendItem(AAoutput, "Asp");
    }
    else if (mRNAinput[i] == "GAA" || mRNAinput[i] == "GAG") {
      appendItem(AAoutput, "Glu");
    }
    else if (mRNAinput[i] == "UGU" || mRNAinput[i] == "UGC") {
      appendItem(AAoutput, "Cys"); 
    }
    else if (mRNAinput[i] == "UGG") {
      appendItem(AAoutput, "Trp");
    }
    else if (mRNAinput[i] == "CGY" || mRNAinput[i] == "CGC" || mRNAinput[i] == "CGA" || mRNAinput[i] == "CGG") {
      appendItem(AAoutput, "Arp"); 
    }
    else if (mRNAinput[i] == "AGA" || mRNAinput[i] == "AGG") {
      appendItem(AAoutput, "Arg");
    }
    else if (mRNAinput[i] == "GGU" || mRNAinput[i] == "GGC" || mRNAinput[i] == "GGA" || mRNAinput[i] == "GGG") {
      appendItem(AAoutput, "Gly");
    }
    else if (mRNAinput[i] == "UAA" || mRNAinput[i] == "UAG" || mRNAinput[i] == "UGa") {
      appendItem(AAoutput, "Stop");
    }
  }
  return AAoutput;
}
//console.log(mRNAconverter(mRNAinput));
